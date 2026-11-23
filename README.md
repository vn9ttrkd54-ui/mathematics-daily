# Mathematics Daily

Mathematics Daily is a mathematics practice website for high-school competitors, coaches, and teachers ages 13 and older. It combines a searchable question bank, adaptive practice, daily challenges, a guided AI tutor, and real-time multiplayer competition.

The approved bank currently contains **1,627 questions** across **Mu (Calculus), Alpha (Precalculus), and Theta (Algebra II)**, with worked solutions, source credits, difficulty/topic/method labels, and SVG illustrations where needed.

## Working demonstration

**[Open Mathematics Daily](https://www.mathematicsdaily.com/)**

- [Question Bank](https://www.mathematicsdaily.com/practice/question-bank): choose a division, filter questions, and open a problem and its solution.
- [Daily Trainer](https://www.mathematicsdaily.com/practice/trainer): practice with adaptive difficulty.
- [Daily Challenge](https://www.mathematicsdaily.com/challenge): division-specific daily questions and streaks.
- [Multiplayer](https://www.mathematicsdaily.com/multiplayer): public matches and private rooms. A match needs other participants.

Guest practice is available. Saving account progress and streaks requires signing in; Llama Tutor is available to signed-in users on individual Question Bank pages at desktop widths. Reviewers do not need production database or hosting-dashboard access.

## Technical architecture

The project is a single Next.js application with separate interface components, application services, and database migrations.

| Layer | How it works | Source |
| --- | --- | --- |
| Interface | Next.js App Router, React, and TypeScript; Tailwind CSS and CSS Modules for styling; KaTeX for mathematics. | [`app/`](app/), [`components/`](components/) |
| Content | Typed question catalogs and SVG figures. Listing pages send lightweight metadata; individual pages load the selected problem. | [`data/questions/`](data/questions/), [`lib/questionBankListing.ts`](lib/questionBankListing.ts), [`public/questions/`](public/questions/) |
| Services and storage | Next.js server routes and service modules handle sensitive operations. Supabase provides Auth, PostgreSQL, row-level policies, and transactional database functions for progress and gameplay. | [`lib/services/`](lib/services/), [`app/api/`](app/api/), [`supabase/migrations/`](supabase/migrations/) |
| Multiplayer | Realtime notifications trigger refreshed snapshots. The server/database determines membership, timing, scoring, and match completion; recovery reads handle missed events. | [`lib/multiplayerRealtime.ts`](lib/multiplayerRealtime.ts), [`lib/multiplayerRecovery.ts`](lib/multiplayerRecovery.ts) |
| Llama Tutor | Server-side OpenAI Responses API calls combine teaching instructions, the current question, and question-specific curriculum guidance where provided. Official answers and solutions enter the prompt after reveal. | [`lib/aiTutor.ts`](lib/aiTutor.ts), [`lib/tutorGuidance.ts`](lib/tutorGuidance.ts), [`lib/tutorInstructions.ts`](lib/tutorInstructions.ts) |

Vercel hosts the application. Supabase stores account and gameplay records separately from the source repository. Privileged database and AI keys remain server-side.

## Development history

The source-code repository became public on GitHub on November 1, 2026. Before that date, the Git history on `main` was sanitized to remove permission-restricted question content, local Supabase connection metadata, and personal email addresses. All 707 existing commits were retained in their original order, along with their messages, author display names, and dates. The commit hashes changed. Withheld question references now contain only editorial metadata. The current source tree includes the corresponding publication notes and test adjustments. Third-party question material remains subject to its recorded redistribution terms.

These milestones describe the development recorded in the [Git history](https://github.com/vn9ttrkd54-ui/MAO-practice/commits/main):

| Period | Recorded work |
| --- | --- |
| July 2026 | Next.js scaffold and navigation prototype, followed by the first Trainer version and dashboard progress sections. |
| August 2026 | Supabase authentication, persistent progress and bookmarks, daily challenge services, and multiplayer schemas and private-room setup. |
| September 2026 | Curriculum-guided Llama Tutor, staged hints and work-checking, usage accounting, retry-safe practice attempts, and account recovery improvements. |
| October 2026 | Multiplayer recovery and handoff improvements; lighter Question Bank browsing; isolated Trainer timer rendering; reviewed catalogs, SVG figures, and source credits; New York challenge dates and community problem submissions. |

<a id="engineering-problems-and-changes"></a>

## Engineering challenges

Browse the 23 cases by topic, or open the [Git history and SQL index](docs/engineering-history-index.md) for the underlying changes.

<details>
<summary>Browse all 23 engineering cases</summary>

| Topic | Cases |
| --- | ---: |
| [Multiplayer](#topic-multiplayer) | 1–8 |
| [Practice, Question Bank and Trainer](#topic-practice-question-bank-and-trainer) | 9–16 |
| [Daily Challenge](#topic-daily-challenge) | 17–18 |
| [Llama Tutor](#topic-llama-tutor) | 19–21 |
| [Accounts and browser security](#topic-accounts-and-browser-security) | 22–23 |

<a id="topic-multiplayer"></a>

### Multiplayer

<a id="case-1"></a>

#### 1. When the host stopped driving the game

**Problem** — Early matches lagged with only a few players. A browser polled roughly once a second, and advancing a round depended on browser activity. Two clients could observe the same deadline and both try to act.

**Approaches with trade-offs** — Faster polling improved the chance of seeing a change but multiplied reads. Realtime reduced that traffic, while a recovery read still had to cover missed notifications. Moving transitions into a database transaction addressed a different failure from either transport change.

**Final solution** — I compared quiz-game designs and chose a hybrid approach. PostgreSQL owns each room's version, phase and deadlines. A scheduled worker advances due rooms. Realtime wakes clients to read a fresh snapshot, and recovery reads catch missed signals.

**Testing and results** — The local database suite exercised transition rollback, finalization and permission checks. The separate two-room run in the next case tested the complete guest journey. The early “few players” observation was a report, without an instrumented baseline.

**Evidence** — [34d266b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/34d266b1784dad59062ee2c7280510cc2c1485b8) · [8b07d12](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8b07d12ba782caedf766e030e147084579e52069) · [034_multiplayer_database_worker.sql](supabase/migrations/034_multiplayer_database_worker.sql) · [035_multiplayer_worker_schedule.sql](supabase/migrations/035_multiplayer_worker_schedule.sql) · [multiplayerArchitecture.database.mjs](tests/multiplayerArchitecture.database.mjs)

<a id="case-2"></a>

#### 2. A notification that made everyone refresh

**Problem** — One player's action could trigger overlapping reads on everyone else's device. Quieting the updates too aggressively introduced a second problem when a client missed a transition.

**Approaches with trade-offs** — The implementation went through signal filtering, coalesced refreshes and a later recovery pass. Filtering routine presence updates removed noise. A bounded fallback provided another opportunity to observe the current phase.

**Final solution** — I ran both host windows while the test harness drove the guest sessions. Clients combine concurrent refresh requests, prefer the newest state version and use timed recovery at phase boundaries. The stored room snapshot gives every reconnecting client the same place to resume.

**Testing and results** — Two simultaneous private rooms each had one host and 29 simulated guests on a single load machine. All 58 guests answered three questions and reached results, for 174 answer responses. No transient HTTP failures were recorded. Completion signal to results route was captured for 14/29 in one room (1.052–27.383 s) and 21/29 in the other (0.234–3.610 s). The 27.383 s observation has no proven root cause. This run establishes a 60-participant scenario. Capacity at 100 concurrent users, public rooms at that scale and performance across independent devices remain unmeasured here.

**Evidence** — [9600d26](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9600d2623d8f23214508609f76109b3f5db58a35) · [d5e1bad](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d5e1bad87fca14bf1d080247960b8417cad5edb0) · [multiplayerRealtime.ts](lib/multiplayerRealtime.ts) · [multiplayerRecovery.ts](lib/multiplayerRecovery.ts) · [multiplayerRealtimeLoadTest.mjs](scripts/multiplayerRealtimeLoadTest.mjs) · [multiplayerBrowserTest.mjs](scripts/multiplayerBrowserTest.mjs)

<a id="case-3"></a>

#### 3. Making a private room recoverable after Back

**Problem** — A host used the browser Back button before starting a private game and then saw a message requiring them to close their existing room. Reloading a tab could also deliver an old disconnect after a new connection had arrived.

**Approaches with trade-offs** — The project added confirmed leave and retry, then made the abandoned private lobby discoverable. Keeping the restriction on ordinary hosts required a way for its owner to return or explicitly close the old lobby.

**Final solution** — I reproduced this by pressing Back before starting the game. Room operations serialize in PostgreSQL. A fresh connection ID and generation distinguish the current tab connection from stale requests. The private host gets a path back to their room or an explicit close action.

**Testing and results** — Local lobby and recovery database suites passed. Cases include same-tab reconnection, outdated leave requests and host ownership. I confirmed the rollout worked for me.

**Evidence** — [dc6a909](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/dc6a909e8b23a8e80b9ad3fd5c8194ee6741b3bf) · [ecde579](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ecde5799b207d9a4082fdb28edf1048cdf746149) · [performance-stage-2.md](docs/performance-stage-2.md) · [multiplayer-lobby-recovery.md](docs/multiplayer-lobby-recovery.md) · [multiplayerLobbyRecovery.database.mjs](tests/multiplayerLobbyRecovery.database.mjs)

<a id="case-4"></a>

#### 4. Starting a public lobby when the roster keeps changing

**Problem** — A public room needed to start promptly when everyone was ready, even though someone could join, leave or change the settings during the countdown.

**Approaches with trade-offs** — Always restarting the timer on a join lets successive arrivals delay everyone. Starting a full room immediately ignores players who are still reading the settings.

**Final solution** — I wanted a player joining late to see the current countdown without making everyone wait again. With at least two active public players, unanimous readiness shortens the remaining timer to at most ten seconds. A new unready player cannot extend it. A settings change invalidates prior readiness. Private games start through the host.

**Testing and results** — All 12 local Ready database scenarios passed, including joins during a shortened timer, stale connections, disconnects and retries. First-question preparation has its own separate clock.

**Evidence** — [743bd59](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/743bd595ade1e5ff721b31721dcf8608d1cfcbba) · [be7f13a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/be7f13a82804af9a00fdbb08a56439a86b87c63c) · [multiplayer-ready-stage-2.md](docs/multiplayer-ready-stage-2.md) · [multiplayerLobbyReady.database.mjs](tests/multiplayerLobbyReady.database.mjs)

<a id="case-5"></a>

#### 5. Knowing who submitted without giving away the answer

**Problem** — In a private match, question 10238 lacked the picture visible in Question Bank. The player who submitted saw the new status locally while peers could continue to see “answering.”

**Approaches with trade-offs** — A local UI change could repair only the submitter's screen. Sending a small room-change signal lets other clients read the updated status while the question and review carry the correct image metadata.

**Final solution** — I used question 10238 to check the missing image and asked for the fix to cover public and private games. The question payload includes the diagram where it is needed. Recording a submission signals a new room state. Clients can display who has answered while open-round score changes and other players' choices stay hidden.

**Testing and results** — The local round-feedback and submission suites passed. The rollout guide identifies the original question and describes checks in play, spectating and review. This review did not replay that specific match on production.

**Evidence** — [db576a5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/db576a51584254604510097a3631e6c189c63811) · [81334db](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/81334dbcd535e3e5cf10160b423a7a036cd95cd1) · [multiplayer-images-status-rollout.md](docs/multiplayer-images-status-rollout.md) · [multiplayerRoundFeedback.database.mjs](tests/multiplayerRoundFeedback.database.mjs)

<a id="case-6"></a>

#### 6. Finalizing ratings and keeping history after rooms expire

**Problem** — Showing final points was only part of finishing a match. Players also needed the right rating change and a durable match record after the short-lived room was cleaned up.

**Approaches with trade-offs** — Keeping every room indefinitely leaves transient state behind. Removing rooms before archiving their results loses dashboard history. Finalization has to be safe to retry before cleanup can be independent.

**Final solution** — I checked how the podium felt during play. The rating calculation happens separately in the database. PostgreSQL finalizes match results once. The rating calculation accounts for opponent strength, ties and eligibility. Room lifecycle rules archive the results needed by later history reads.

**Testing and results** — The local architecture suite passed checks for +20/−12 examples, stronger and weaker opponents, ties, rating floors, unranked games, guests and repeat finalization. The dashboard fixture separately checks overlap between archived and live results.

**Evidence** — [d064e3b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d064e3b65efa85bc82082595930907c1c45f4f54) · [630709e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/630709e8a2c9ee0907b4fed0875b6bfb1c06268d) · [037_multiplayer_balanced_rp.sql](supabase/migrations/037_multiplayer_balanced_rp.sql) · [049_multiplayer_room_lifecycle.sql](supabase/migrations/049_multiplayer_room_lifecycle.sql) · [multiplayerArchitecture.database.mjs](tests/multiplayerArchitecture.database.mjs)

<a id="case-7"></a>

#### 7. How to start a question fairly on devices that load at different times

**Problem** — Preloading the next question made transitions faster but created a fairness question. Which clock decides when a player can see the problem, submit it and earn the maximum speed bonus?

**Approaches with trade-offs** — The project introduced preloading, checked the active round before reveal and later replaced delivery-dependent scoring with one server clock. The fast first-round schedule subsequently bounded preparation for that round.

**Final solution** — I wanted faster handoffs while keeping the speed bonus fair. The server stores the shared reveal and end times and enforces the submission window. Receipt time is captured before the room lock. Delivery acknowledgment cannot reset speed credit. Transport grace is shared.

**Testing and results** — Local round and submission suites cover early rejection, duplicate readiness, official deadlines and delayed delivery. In the two-room run, controls became usable 11–120 ms after the harness detected a question. That interval excludes the time it took to fetch and display the question.

**Evidence** — [c5e892d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c5e892d036844ba09f2644380d21ff779075a49d) · [75c8d76](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/75c8d76b911a63bcb527dabf8e48e7014e473281) · [030_confirm_preloaded_round_before_reveal.sql](supabase/migrations/030_confirm_preloaded_round_before_reveal.sql) · [040_multiplayer_authoritative_scoring_clock.sql](supabase/migrations/040_multiplayer_authoritative_scoring_clock.sql) · [multiplayerDelivery.test.mjs](tests/security/multiplayerDelivery.test.mjs)

<a id="case-8"></a>

#### 8. Public queues, private invitations and spectators

**Problem** — A ranked public directory had to keep open seats discoverable while private hosts needed invitation-only rooms. A spectator needed live information without becoming a scoring player.

**Approaches with trade-offs** — The product grew from private rooms into standing public queues and later live spectating. Reusing one roster for everyone would confuse capacity, readiness and eligibility for game results.

**Final solution** — I usually tested in private rooms, so I specifically asked for the fixes to cover public rooms too. Separate player and spectator memberships have distinct presence rules. Public rooms have 20 seats and private rooms 30. A public host can transfer to an active player. Starting a game records its roster and the replacement public queue atomically.

**Testing and results** — Local lobby, settings and handoff database suites passed, including public spectator access to completed results and private result access limited to members. The early 20- and 30-seat design limits are independent of total site concurrency.

**Evidence** — [7a70a13](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7a70a1395dfecfdf9185a7f29aada14a3ed3799d) · [05bf9eb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/05bf9eb946ae619a9c46bf770b90c1fd533507a2) · [multiplayer-settings-stage-1.md](docs/multiplayer-settings-stage-1.md) · [multiplayerSettings.database.mjs](tests/multiplayerSettings.database.mjs) · [multiplayerFastHandoffs.database.mjs](tests/multiplayerFastHandoffs.database.mjs)


<a id="topic-practice-question-bank-and-trainer"></a>

### Practice, Question Bank and Trainer

<a id="case-9"></a>

#### 9. Keeping guest practice separate from saved account progress

**Problem** — Practice needed to work before signup and continue to make sense when a player signed in, switched accounts or returned later.

**Approaches with trade-offs** — The history shows guest memory stores followed by account-backed services. Local state kept guest practice available. Durable storage made signed-in progress available across visits and introduced explicit authorization and loading states.

**Final solution** — I saw saved progress and bookmarks become unavailable after sign-in. Practice code selects the guest or signed-in path. Account reads follow the authenticated identity and database row policies. On an account change, the UI discards a prior owner's snapshot.

**Testing and results** — An owner-isolation database fixture passed locally with the updated working-copy setup. A separate two-account hosted read check found each test account's populated bookmarks and progress hidden from the other.

**Evidence** — [9fad236](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9fad236a425df71d41948fa2832fd5049bc79204) · [8132e60](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8132e60732a60964ccbe30b21634a34dab08ea1f) · [001_auth_user_data.sql](supabase/migrations/001_auth_user_data.sql) · [questionBankRead.test.mjs](tests/questionBankRead.test.mjs) · [questionState.database.mjs](tests/questionState.database.mjs)

<a id="case-10"></a>

#### 10. Opening a division without downloading the entire bank

**Problem** — Rendering a grid of numbered links pulled in complete questions, worked solutions and neighboring content. Many visible links could prefetch pages the player would never open.

**Approaches with trade-offs** — Simple pagination could lose the filtered order after opening a problem. Shipping a compact listing, remembering the visible batch and encoding a bounded filtered sequence preserved that context.

**Final solution** — I wanted to keep Load more so opening a division would stay quick as the bank grew. A division initially renders 120 tiles, with 120 more per click. A tile prefetches on hover or keyboard focus. Full problem data is delivered for the selected question, and filters operate on the complete metadata list.

**Testing and results** — Local production-build measurements of unique referenced JS chunks fell from 266,685 to 77,071 gzip bytes for a division and from 357,763 to 166,558 for a detail page. These are bundle sizes for the recorded builds. They do not measure a user's wait time.

**Evidence** — [121baee](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/121baee9c56082256d24efa45de32697f15811de) · [performance-stage-3.md](docs/performance-stage-3.md) · [questionBankListing.ts](lib/questionBankListing.ts) · [measureQuestionBankBundles.mjs](scripts/measureQuestionBankBundles.mjs) · [questionBankPerformance.test.mjs](tests/questionBankPerformance.test.mjs)

<a id="case-11"></a>

#### 11. The question was visible while saved progress timed out

**Problem** — I waited roughly 30 seconds twice in a row. Screenshots showed that the 325-question grid and the individual problem had already rendered while progress, statistics and bookmark controls remained unavailable.

**Approaches with trade-offs** — The old client waited for browser auth on both sides of its reads. Increasing the timeout would make a failure harder to detect. A single, bounded same-origin request could verify the owner once and still enforce ordinary database policies.

**Final solution** — My screenshots narrowed the problem down to saved state. I had already been signed in for about 30 seconds when I opened Practice. The server verifies identity, reads scoped progress and bookmarks in ordered 500-row pages or fetches a compact detail snapshot, and returns a private response. The UI retains confirmed same-account data and exposes Retry. Server work has an eight-second budget and the browser a twelve-second deadline.

**Testing and results** — Tests cover failed and stale reads, account changes and histories exceeding 1,000 entries. A fixture with 1,105 saved questions and a 5,000-attempt question returned 245 bytes of statistics. No production trace identifies the cause of the original two stalls or measures post-fix latency.

**Evidence** — [201e189](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/201e1896f5edaba99fa06a9c37b9ba338cc4985e) · [2ca573e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2ca573e04d2f07de89c7848eebebe52efc13581d) · [question-bank-loading-fix.md](docs/question-bank-loading-fix.md) · [performance-stage-8.md](docs/performance-stage-8.md) · [questionState.database.mjs](tests/questionState.database.mjs)

<a id="case-12"></a>

#### 12. Recording practice answers and elapsed time exactly once

**Problem** — Reloads, duplicate submissions and large histories made it difficult to trust an attempt count or a lifetime average. Keeping an ever-growing array of timings also increased the cost of each read.

**Approaches with trade-offs** — Re-sending a new result risks counting the same attempt twice. Keeping only recent samples without lifetime aggregates would silently change what the average means.

**Final solution** — The recent-sample cap preserves the lifetime statistics shown to the player. A server-issued attempt identifies the permitted question and owner and expires. The result path recognizes a replay. SQL stores bounded recent timing samples alongside lifetime aggregates and preserves the documented historical time conversion.

**Testing and results** — The attempt and timing suites cover duplicates, invalid timing and legacy data. The database fixture verifies exact lifetime timing with a 245-byte question snapshot. Timing history retains up to 100 recent samples.

**Evidence** — [bef0dce](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bef0dceb9916c89717fe9da2e192789d09df5103) · [practice-attempt-rollout.md](docs/practice-attempt-rollout.md) · [practice-timing-rollout.md](docs/practice-timing-rollout.md) · [practiceTiming.test.mjs](tests/practiceTiming.test.mjs)

<a id="case-13"></a>

#### 13. Making the adaptive Trainer cheaper without changing what it selects

**Problem** — Trainer selection and rendering dragged full problem content through code that only needed IDs, division and difficulty. A ticking clock could also repeatedly render expensive static question content.

**Approaches with trade-offs** — The refactor separated metadata selection from question delivery and used the earlier selector as a behavioral comparison. The timer received its own rendering update so unrelated question content could stay stable.

**Final solution** — I asked for Trainer and Question Bank to be reviewed together before launch. Trainer selects from lightweight metadata and fetches the chosen problem. Difficulty follows correct and incorrect streaks. Every tenth question is a challenge, and missing that challenge preserves the current adaptive state. Players can choose a starting difficulty.

**Testing and results** — At the measured 1,010-question snapshot, metadata serialized to 83,803 bytes versus 710,032 bytes for full content. Initial gzipped JS fell from 363,117 to 173,075 bytes. Across 960 seeded cases the old and new selectors returned the same IDs. Neither byte count is a response-time benchmark.

**Evidence** — [80eaab0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/80eaab0789026975c31c9d6afa95e5dd4404beff) · [cff2e60](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cff2e600c3a38a44195c37e6ed388709438d5d83) · [performance-stage-4.md](docs/performance-stage-4.md) · [trainerAdaptive.ts](lib/trainerAdaptive.ts) · [trainerPerformance.test.mjs](tests/trainerPerformance.test.mjs)

<a id="case-14"></a>

#### 14. Saving a Trainer session through retries and refreshes

**Problem** — Refreshing an unfinished session could discard it. Finishing a long session raised a different risk when session and result writes only partly succeeded or their response was lost.

**Approaches with trade-offs** — A tab-local draft restores interrupted work on the same device. A database transaction with a stable save identity handles durable completion. Sending the complete prior session history after every save would undo the performance gain.

**Final solution** — I wanted Trainer saves to stay reliable as players built up longer histories. A draft preserves the owner, question, timers and adaptive state within the tab. A finished session and its answers commit together. An exact retry returns the existing receipt. A conflicting retry is rejected.

**Testing and results** — The updated local fixture passed rollback, 30 exact retries and the 2,000-answer cap. With 1,105 earlier sessions the receipt was 662 bytes. Restoring a tab-local draft on another device is outside the feature.

**Evidence** — [9549ffc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9549ffc3acfebc30afedc24051d7a44c37bf6095) · [24b5ee6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/24b5ee6bd1818626782aedcf87baa7935d65ce37) · [performance-stage-7.md](docs/performance-stage-7.md) · [trainer-refresh-recovery.md](docs/trainer-refresh-recovery.md) · [trainerSessionSave.database.mjs](tests/trainerSessionSave.database.mjs)

<a id="case-15"></a>

#### 15. A dashboard that stays correct past the default row limit

**Problem** — Building the dashboard from large client-side histories made it expensive to open and could silently omit old rows or double-count a match present in both live and archived storage.

**Approaches with trade-offs** — Fetching more pages moves the cost to every browser visit. Computing a bounded snapshot near the data makes the transfer predictable and keeps archive reconciliation in one place.

**Final solution** — I wanted returning players to see their dashboard without downloading their entire history. An authenticated database function aggregates the full history and returns bounded display lists. Guest and signed-in failure paths have explicit loading and recovery states.

**Testing and results** — The updated local fixture covered 1,105 Trainer sessions, over 1,000 progress and bookmark rows, and 1,107 ranked results across live and archived storage. The summary was 4,063 bytes. The recorded dashboard build fell from 274,811 to 81,967 gzip bytes.

**Evidence** — [ce78e53](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ce78e53f120d02cb6c620953a93cbf23ffe953db) · [052_dashboard_snapshot.sql](supabase/migrations/052_dashboard_snapshot.sql) · [performance-stage-6.md](docs/performance-stage-6.md) · [dashboardSnapshot.database.mjs](tests/dashboardSnapshot.database.mjs) · [measureDashboardBundles.mjs](scripts/measureDashboardBundles.mjs)

<a id="case-16"></a>

#### 16. Picking a useful next problem from an uneven bank

**Problem** — Uniform random picks can keep serving recently solved questions or neglect weak topics. A strict no-repeat rule can leave a small division or difficulty range with nothing to serve.

**Approaches with trade-offs** — The selector weights eligible questions and uses ordered fallback pools. It sometimes stays on the previous topic more often after a miss than after a correct answer. Recently solved questions ordinarily have a 30-day cooldown.

**Final solution** — I wanted the division, topic and difficulty labels to mean the same thing across competitions. The selector aggregates topic history and samples weighted candidates. The adaptive difficulty controller changes the target level separately. This separation allowed the lighter catalog to use the same selection behavior.

**Testing and results** — The historical 960-case seeded comparison covered three divisions and checked equivalence to the earlier selector. That result addresses regression risk. It cannot establish which weights best improve learning.

**Evidence** — [80eaab0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/80eaab0789026975c31c9d6afa95e5dd4404beff) · [cdc1794](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cdc179431e6ee33c1b48ef2396bfb6907dfaabda) · [trainer.ts](lib/trainer.ts) · [trainerAdaptive.ts](lib/trainerAdaptive.ts) · [performance-stage-4.md](docs/performance-stage-4.md) · [trainerAdaptive.test.mjs](tests/trainerAdaptive.test.mjs)


<a id="topic-daily-challenge"></a>

### Daily Challenge

<a id="case-17"></a>

#### 17. Getting streaks, division submissions and the Monday square to agree

**Problem** — I finished Monday’s challenge and saw a streak of one, but the Monday square was still empty. A player could also complete more than one division on a single day.

**Approaches with trade-offs** — Coloring squares from the current streak length cannot locate the actual dates. Computing “today” independently in browser-local time and UTC can assign one submission to two different dates.

**Final solution** — My Monday screenshot showed why the calendar needed the actual completion dates. Each division has its own daily assignment and submission. Completing multiple divisions on one date earns one shared streak day. The week view uses completed dates. Shared application and SQL rules use America/New_York.

**Testing and results** — The division and time-zone database suites passed, as did date and week unit tests. The older fallback publishing guide still says UTC. The later time-zone migration and date helper describe the current rule.

**Evidence** — [8f79a42](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8f79a42601bec6e0a246438131ddaac5ff73272c) · [7aa90e7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7aa90e76292281f9e1da433cb407c157c00421ac) · [cdb1a14](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cdb1a14bfb1acf6cf0a5f7690e19c018166c19c4) · [challengeDate.ts](lib/challengeDate.ts) · [challengeDivisions.database.mjs](tests/challengeDivisions.database.mjs) · [challengeTimeZone.database.mjs](tests/challengeTimeZone.database.mjs)

<a id="case-18"></a>

#### 18. Ranking daily results while keeping individual answers private

**Problem** — A shared leaderboard needed meaningful ties and personal standing. Showing every raw submission would reveal more information than visitors need.

**Approaches with trade-offs** — The sequence of migrations adds daily-submission tie-breaking, a personal-rank function and public read boundaries. Each addresses a different part of the page.

**Final solution** — Public standings and personal feedback are separate views. Dedicated ranking functions compute group standings and the viewer's own summary. Public-facing reads expose the intended leaderboard fields, while private submission records have narrower access.

**Testing and results** — The migration sequence documents the tie and visibility rules. The local division suite covers submission and streak behavior. A separate end-to-end leaderboard test with a large production field was not run for this review.

**Evidence** — [662daf6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/662daf67884aefb1cb571595d76fce1e1ff9c068) · [9d8b58c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9d8b58cf36586d500dfaa0234131637b1c6fa637) · [006_challenge_leaderboard_daily_tiebreak.sql](supabase/migrations/006_challenge_leaderboard_daily_tiebreak.sql) · [008_challenge_public_read_boundaries.sql](supabase/migrations/008_challenge_public_read_boundaries.sql)


<a id="topic-llama-tutor"></a>

### Llama Tutor

<a id="case-19"></a>

#### 19. Giving useful hints without spoiling a contest problem

**Problem** — A general-purpose tutor could jump to the official solution, misread a student's attempt or give a generic hint unrelated to the difficulty in front of them.

**Approaches with trade-offs** — The tutor evolved from general guidance to staged, question-specific hints, misconception checks and feedback on the student's work. Sending the answer key on every turn would make reveal a matter of prompt compliance alone.

**Final solution** — I developed representative examples of hints and common mistakes, then reviewed and refined additional question guidance. The server assembles a request to the tutor provider using the current question and available guidance. Official answers and worked solutions enter the prompt after reveal. The app also handles visual descriptions, math formatting and narrowly scoped site questions.

**Testing and results** — Guidance, instruction, reveal-token, safety and math tests passed in the local unit run. They verify inputs, boundaries and formatting. They cannot guarantee the pedagogical quality or spoiler-free behavior of every generated answer.

**Evidence** — [2b310a4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2b310a487828d8455be5976966dc27957fdc0d6a) · [0f678e4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0f678e4bdb7aa530d490f1da03ed78c952fc7f71) · [db40f8c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/db40f8caaf9646781d6445e193a57753e4d42123) · [tutorGuidance.ts](lib/tutorGuidance.ts) · [tutorInstructions.ts](lib/tutorInstructions.ts) · [tutorRevealToken.test.mjs](tests/tutorRevealToken.test.mjs)

<a id="case-20"></a>

#### 20. Counting a paid tutor request whose outcome is unknown

**Problem** — A learner could send a request, lose the response and try again while the provider might still be processing or billing the original. Concurrent requests could also consume the last daily allowance more than once.

**Approaches with trade-offs** — Immediately refunding a timeout risks overspending. Holding all capacity indefinitely blocks other students. The system releases short concurrency leases separately from daily slots and token reservations.

**Final solution** — I wanted tutor protections that could run without CAPTCHA or extra requests during a multiplayer game. SQL reserves capacity before a paid call. Exact outcomes settle once. Uncertain outcomes retain a hold, and a late completion uses its original Eastern day. The default daily allowance is 15 and a concurrency lease lasts 90 seconds.

**Testing and results** — Local accounting and daily-slot tests checked late and duplicate settlement, unknown usage and quota boundaries. They model the application's ledger. No paid provider requests or billing reconciliation were performed for this review.

**Evidence** — [bef0dce](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bef0dceb9916c89717fe9da2e192789d09df5103) · [041_ai_tutor_durable_accounting.sql](supabase/migrations/041_ai_tutor_durable_accounting.sql) · [046_ai_tutor_daily_slots.sql](supabase/migrations/046_ai_tutor_daily_slots.sql) · [tutor-daily-slots-rollout.md](docs/tutor-daily-slots-rollout.md) · [tutorDailySlots.test.mjs](tests/security/tutorDailySlots.test.mjs)

<a id="case-21"></a>

#### 21. Letting a busy tutor recover without retrying forever

**Problem** — The old browser retried every 1.2 seconds while the tutor was busy. A long wait generated repeated requests and left the student uncertain whether another send would cost a message.

**Approaches with trade-offs** — The replacement uses bounded delays with jitter for explicit busy responses. For an uncertain outcome it restores the draft and lets the student decide whether to send again.

**Final solution** — The retry decision depends on whether the provider may already have started the request. Only an explicit busy response triggers an automatic retry. An in-flight guard blocks double sends. There is a 60-second per-attempt limit, a 90-second total send limit and a separate 45-second provider deadline.

**Testing and results** — The transport and accounting-route tests passed locally. The recorded reliability checks used controlled responses. A deterministic test can verify retry behavior without incurring a model charge.

**Evidence** — [9888135](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/98881351287489d85cfa8578e8d8d4e033949810) · [performance-stage-5.md](docs/performance-stage-5.md) · [tutorTransport.ts](lib/tutorTransport.ts) · [tutorTransport.test.mjs](tests/tutorTransport.test.mjs) · [tutorAccountingRoute.test.mjs](tests/tutorAccountingRoute.test.mjs)


<a id="topic-accounts-and-browser-security"></a>

### Accounts and browser security

<a id="case-22"></a>

#### 22. Giving Google and password accounts one safe public identity

**Problem** — Google sign-in, username-based sign-in and guest nicknames all produced visible names. A player reported an inappropriate name, while a heavy-handed filter could also reject innocent names.

**Approaches with trade-offs** — Client-side name checks provide quick feedback, yet each account or guest creation path needs consistent enforcement. Broad substring matching also creates false positives, so ambiguous terms need narrower matching.

**Final solution** — I reported a nickname that slipped through and asked for consistent checks wherever a public name can be set. Google users complete site username setup. The database enforces normalized naming rules and the browser gives early feedback. Verified sign-in identity is kept separate from the public name. A later change clarified the username format message.

**Testing and results** — Public-name, Google auth and signup-identity tests passed locally, including normalization, reserved names and benign examples. The filter's vocabulary is curated and language-specific. The review did not use a real Google account.

**Evidence** — [84d18e2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/84d18e28882c0cef3cb2ec4ba653fe10e0ffe8c5) · [5107a06](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5107a0677ac4d6fd7ff61061234ad251f2b902db) · [17ea877](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/17ea877ffedb0b9b0c24cf29a0562526f99f7cf9) · [publicNames.ts](lib/auth/publicNames.ts) · [publicNames.test.mjs](tests/publicNames.test.mjs) · [google-auth-username-filter.md](docs/google-auth-username-filter.md)

<a id="case-23"></a>

#### 23. Hardening the browser while keeping mathematics and login usable

**Problem** — The site renders authored math, displays user feedback and signs users in through an external provider. Security headers and dependency changes could break ordinary diagrams, formulas or OAuth navigation.

**Approaches with trade-offs** — The implementation combines constrained rendering, explicit application policy, server-side permission checks and targeted dependency patches. A blanket downgrade of the framework's lint tooling was a separate proposal in the audit output, with its own compatibility cost.

**Final solution** — I wanted stronger security without slowing ordinary gameplay or adding CAPTCHA. The application centralizes math rendering and browser policy, filters analytics, keeps privileged actions on the server, and carries tests for the relevant dependency fixes and signup permissions.

**Testing and results** — Local browser-policy and dependency-patch unit tests passed. The repository also has a browser-level math rendering suite. Production browser headers, external control panels and a current package audit were not rechecked for this documentation pass.

**Evidence** — [fffca82](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fffca82f8ef3991577d5ff85608ced5f88e8062a) · [eba0084](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/eba00843406b20f276caf173878b2940d2666db3) · [browserSecurityPolicy.test.mjs](tests/browserSecurityPolicy.test.mjs) · [dependencyPatches.test.mjs](tests/security/dependencyPatches.test.mjs) · [mathRendering.browser.mjs](tests/security/mathRendering.browser.mjs)

</details>

## How to run locally

Use **Node.js 24**, npm, and a separate Supabase development project.

```bash
git clone https://github.com/vn9ttrkd54-ui/MAO-practice.git
cd MAO-practice
npm ci
```

Apply the reviewed SQL prerequisites from [`supabase/migrations/`](supabase/migrations/) in dependency order and configure Supabase Auth for your local URL. This repository does not provide a one-command, fully seeded database bootstrap. Existing installations require coordinated app/database updates; follow the [practice](docs/practice-attempt-rollout.md), [timing](docs/practice-timing-rollout.md), [recovery](docs/recovery-rollout.md), [Auth](docs/supabase-auth-settings.md), and [multiplayer](docs/multiplayer-fast-handoffs.md) guides rather than blindly pushing pending migrations to production.

Create an untracked `.env.local` using your development project's credentials:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_DEVELOPMENT_PUBLISHABLE_KEY
SUPABASE_SECRET_KEY=YOUR_DEVELOPMENT_SERVER_SECRET_KEY
```

Only the URL and publishable key belong in browser configuration. Keep server secrets, `.env.local`, and real account/database exports out of Git. Optional Google sign-in requires its provider and redirect URLs to be configured separately.

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000). For a production build, run `npm run build`, then `npm start`. The live demonstration is the quickest way to review the project without provisioning services.

### Optional: Llama Tutor

Add `OPENAI_API_KEY` as a server-only environment variable. Optional settings are `OPENAI_TUTOR_MODEL` (default `gpt-5-mini`) and `TUTOR_DAILY_MESSAGE_LIMIT` (default `15`). The tutor also requires its migrations through `046_ai_tutor_daily_slots.sql`; follow the [accounting rollout](docs/tutor-accounting-rollout.md) and [daily-slot rollout](docs/tutor-daily-slots-rollout.md) for existing installations.

Initial migrations seed a shared pool of 1,000,000 tokens with a 25,000-token reserve. Accounting includes confirmed usage and conservative holds for uncertain requests. Never reset usage or delete ledger rows to refill it: review outstanding reservations and adjust the limit deliberately. This application budget is not a provider billing cap. Conversations are temporary and clear when the tutor closes, the page changes, or the tab is hidden.

## Verification

```bash
npm run lint
node --experimental-strip-types --test tests/*.test.mjs
npm run build -- --webpack
```

Additional checks live in [`tests/`](tests/). After building and installing Chromium with `npx playwright install chromium`, run `node --experimental-strip-types tests/stageThree.next.browser.mjs` for local Question Bank navigation checks. Browser fixtures use synthetic data; database suites generally require a separately installed PGlite module as specified by each script. Live multiplayer/load scripts are separate and can modify their target environment.

## Credits and external sources

- **Development:** Orlando Science Mu Alpha Theta. Participating Mu Alpha Theta National Student Delegates contributed to the question bank.
- **Student delegate endorsements:** Mu Alpha Theta National Student Delegates and Florida Association of Mu Alpha Theta Student Delegates, as listed on the [Credits page](https://www.mathematicsdaily.com/credits). These are student delegate endorsements, not an endorsement by the national organization.
- **Question sources:** Selected Mu Alpha Theta and Florida Association of Mu Alpha Theta competition materials are reproduced or adapted under the project's recorded permissions, with per-question attribution. Restricted National Convention Mu sets are withheld from the application pending clear publication permission; see the [publication policy](docs/mu-national-permission.md). Question rights remain with their respective creators.
- **Libraries and services:** [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [Supabase](https://supabase.com/), [KaTeX](https://katex.org/), [Lucide](https://lucide.dev/), [Geist fonts](https://vercel.com/font), [Vercel](https://vercel.com/), and the [OpenAI API](https://developers.openai.com/api/docs/). Testing uses [Playwright](https://playwright.dev/) and, for isolated database suites, [PGlite](https://pglite.dev/). Dependency versions are in [`package.json`](package.json) and [`package-lock.json`](package-lock.json).

Mathematics Daily is an independent educational project and is not affiliated with, sponsored by, or endorsed by Mu Alpha Theta as an organization. Question permissions do not imply a blanket license to redistribute all repository materials.
