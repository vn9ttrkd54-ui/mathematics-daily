# Engineering history and SQL index

Companion to the [engineering challenge guide](../README.md#engineering-challenges). The reference is the local repository at [041053e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/041053e39e72a6d09efbbfa96f0fd48dd5bbc964) on November 23, 2026. All 712 commits reachable from local refs were also reachable from main. Commit links use the hashes in the reviewed repository history. The review included patch contents and changed paths. A file move or a repeated subject counts as a commit, not as proof of a separate engineering challenge.

- [SQL inventory](#sql-inventory) · 70 tracked migrations and 6 other tracked SQL files
- [Earlier SQL path and local-only files](#earlier-sql-path-and-local-only-files)
- [Commit history](#commit-history) · grouped by author month

## SQL inventory

These are the 76 tracked SQL files at the reference commit, totaling 8,844 lines including comments and blank lines. Inventory order is for reference. Use each rollout guide for dependencies and installation instructions.

| Migration | Engineering purpose |
| --- | --- |
| [001_auth_user_data.sql](../supabase/migrations/001_auth_user_data.sql) | Account profiles and user-owned practice data |
| [002_username_availability.sql](../supabase/migrations/002_username_availability.sql) | Username availability at signup |
| [003_challenge_pack_c2.sql](../supabase/migrations/003_challenge_pack_c2.sql) | Daily assignment, submission and streak structures |
| [004_challenge_pack_c6_submission.sql](../supabase/migrations/004_challenge_pack_c6_submission.sql) | Accept a daily challenge submission and update progress |
| [005_challenge_pack_c8_leaderboard.sql](../supabase/migrations/005_challenge_pack_c8_leaderboard.sql) | Return leaderboard data |
| [006_challenge_leaderboard_daily_tiebreak.sql](../supabase/migrations/006_challenge_leaderboard_daily_tiebreak.sql) | Use daily submission information to break leaderboard ties |
| [007_challenge_pack_c9_personal_rank.sql](../supabase/migrations/007_challenge_pack_c9_personal_rank.sql) | Expose a player's personal standing |
| [008_challenge_public_read_boundaries.sql](../supabase/migrations/008_challenge_public_read_boundaries.sql) | Narrow public read access to challenge data |
| [009_multiplayer_pack_m2_schema.sql](../supabase/migrations/009_multiplayer_pack_m2_schema.sql) | Establish multiplayer rooms, players, questions, answers and results |
| [010_multiplayer_guest_nickname_rules.sql](../supabase/migrations/010_multiplayer_guest_nickname_rules.sql) | Validate nicknames for guest seats |
| [011_multiplayer_public_room_queues.sql](../supabase/migrations/011_multiplayer_public_room_queues.sql) | Seed public waiting queues across divisions and match lengths |
| [012_multiplayer_spectator_presence.sql](../supabase/migrations/012_multiplayer_spectator_presence.sql) | Track spectator presence independently of playing seats |
| [013_feedback_account_admin.sql](../supabase/migrations/013_feedback_account_admin.sql) | Feedback, account administration and protected staff access |
| [014_auth_display_names.sql](../supabase/migrations/014_auth_display_names.sql) | Separate profile/display naming from authentication data |
| [015_security_hardening.sql](../supabase/migrations/015_security_hardening.sql) | Strengthen application data boundaries |
| [016_temporary_daily_challenge_2026_08_12.sql](../supabase/migrations/016_temporary_daily_challenge_2026_08_12.sql) | Seed a specific historical daily challenge |
| [017_temporary_daily_challenge_2026_08_13.sql](../supabase/migrations/017_temporary_daily_challenge_2026_08_13.sql) | Seed the next historical daily challenge |
| [018_owner_role.sql](../supabase/migrations/018_owner_role.sql) | Introduce the owner role |
| [019_security_defense_in_depth.sql](../supabase/migrations/019_security_defense_in_depth.sql) | Add further permission and abuse-control protections |
| [020_fix_login_rate_limit_timestamp.sql](../supabase/migrations/020_fix_login_rate_limit_timestamp.sql) | Correct the timestamp used by login throttling |
| [021_ai_tutor_foundation.sql](../supabase/migrations/021_ai_tutor_foundation.sql) | Establish tutor usage accounting and configuration |
| [022_multiplayer_realtime_foundation.sql](../supabase/migrations/022_multiplayer_realtime_foundation.sql) | Add multiplayer state signals through Realtime |
| [023_multiplayer_realtime_signal_filter.sql](../supabase/migrations/023_multiplayer_realtime_signal_filter.sql) | Filter signals that do not require a client refresh |
| [024_multiplayer_atomic_round_transitions.sql](../supabase/migrations/024_multiplayer_atomic_round_transitions.sql) | Serialize multiplayer round transitions |
| [025_fix_multiplayer_transition_timestamp.sql](../supabase/migrations/025_fix_multiplayer_transition_timestamp.sql) | Correct the clock used by transition logic |
| [026_multiplayer_request_storm_control.sql](../supabase/migrations/026_multiplayer_request_storm_control.sql) | Reduce redundant refreshes from correlated room events |
| [027_multiplayer_transition_recovery.sql](../supabase/migrations/027_multiplayer_transition_recovery.sql) | Recover missed multiplayer transitions |
| [028_fix_multiplayer_state_trigger.sql](../supabase/migrations/028_fix_multiplayer_state_trigger.sql) | Correct the multiplayer state trigger |
| [029_preload_multiplayer_questions.sql](../supabase/migrations/029_preload_multiplayer_questions.sql) | Preload upcoming questions |
| [030_confirm_preloaded_round_before_reveal.sql](../supabase/migrations/030_confirm_preloaded_round_before_reveal.sql) | Confirm the preloaded round before revealing it |
| [031_multiplayer_atomic_submissions.sql](../supabase/migrations/031_multiplayer_atomic_submissions.sql) | Accept and score an answer atomically |
| [032_multiplayer_atomic_finalization.sql](../supabase/migrations/032_multiplayer_atomic_finalization.sql) | Finalize a match once across retries |
| [033_multiplayer_event_snapshots.sql](../supabase/migrations/033_multiplayer_event_snapshots.sql) | Construct consistent snapshots for room events |
| [034_multiplayer_database_worker.sql](../supabase/migrations/034_multiplayer_database_worker.sql) | Advance room state through a database worker |
| [035_multiplayer_worker_schedule.sql](../supabase/migrations/035_multiplayer_worker_schedule.sql) | Schedule the multiplayer worker |
| [036_multiplayer_readiness_countdown.sql](../supabase/migrations/036_multiplayer_readiness_countdown.sql) | Coordinate readiness and the shared round countdown |
| [037_multiplayer_balanced_rp.sql](../supabase/migrations/037_multiplayer_balanced_rp.sql) | Balance rating adjustments and preserve match rating history |
| [038_daily_challenge_divisions.sql](../supabase/migrations/038_daily_challenge_divisions.sql) | Partition daily assignments by division with shared streak credit |
| [039_admin_users_directory.sql](../supabase/migrations/039_admin_users_directory.sql) | Provide authorized staff access to the user directory |
| [040_multiplayer_authoritative_scoring_clock.sql](../supabase/migrations/040_multiplayer_authoritative_scoring_clock.sql) | Use a server receipt clock for answer timing and speed credit |
| [041_ai_tutor_durable_accounting.sql](../supabase/migrations/041_ai_tutor_durable_accounting.sql) | Reserve and settle tutor usage durably |
| [042_feedback_submission_guard.sql](../supabase/migrations/042_feedback_submission_guard.sql) | Guard and rate-limit feedback submissions |
| [043_practice_attempt_guard.sql](../supabase/migrations/043_practice_attempt_guard.sql) | Issue and consume verified practice attempts |
| [044_bounded_practice_timing.sql](../supabase/migrations/044_bounded_practice_timing.sql) | Bound stored timings while retaining lifetime aggregates |
| [045_single_use_recovery.sql](../supabase/migrations/045_single_use_recovery.sql) | Consume account recovery credentials once |
| [046_ai_tutor_daily_slots.sql](../supabase/migrations/046_ai_tutor_daily_slots.sql) | Reserve tutor daily slots independently of concurrency leases |
| [047_multiplayer_host_account_deletion.sql](../supabase/migrations/047_multiplayer_host_account_deletion.sql) | Preserve other participants when a host account is deleted |
| [048_daily_challenges_2026_09_23_to_27.sql](../supabase/migrations/048_daily_challenges_2026_09_23_to_27.sql) | Schedule a historical group of daily challenges |
| [049_multiplayer_room_lifecycle.sql](../supabase/migrations/049_multiplayer_room_lifecycle.sql) | Limit room creation and preserve history during room cleanup |
| [050_multiplayer_room_cleanup_schedule.sql](../supabase/migrations/050_multiplayer_room_cleanup_schedule.sql) | Schedule bounded room cleanup |
| [051_multiplayer_confirmed_lobby_transitions.sql](../supabase/migrations/051_multiplayer_confirmed_lobby_transitions.sql) | Serialize and confirm lobby joins, leaves and starts |
| [052_dashboard_snapshot.sql](../supabase/migrations/052_dashboard_snapshot.sql) | Compute a bounded dashboard snapshot |
| [053_atomic_trainer_session_save.sql](../supabase/migrations/053_atomic_trainer_session_save.sql) | Save a Trainer session and its results atomically |
| [054_question_state_snapshot.sql](../supabase/migrations/054_question_state_snapshot.sql) | Read compact question state and support explicit bookmark changes |
| [057_google_auth_public_names.sql](../supabase/migrations/057_google_auth_public_names.sql) | Validate public names and support Google-account setup |
| [058_signup_role_function_permissions.sql](../supabase/migrations/058_signup_role_function_permissions.sql) | Restrict signup and role-management function permissions |
| [059_multiplayer_room_settings.sql](../supabase/migrations/059_multiplayer_room_settings.sql) | Store and validate multiplayer room settings and host changes |
| [060_multiplayer_lobby_ready.sql](../supabase/migrations/060_multiplayer_lobby_ready.sql) | Track public readiness against the current settings version |
| [061_multiplayer_scoring_give_up.sql](../supabase/migrations/061_multiplayer_scoring_give_up.sql) | Support Give up and versioned scoring |
| [062_multiplayer_round_feedback.sql](../supabase/migrations/062_multiplayer_round_feedback.sql) | Expose closed-round feedback while protecting an open round |
| [063_multiplayer_lobby_recovery.sql](../supabase/migrations/063_multiplayer_lobby_recovery.sql) | Recover private lobbies and align idle public-room scoring |
| [064_multiplayer_fast_handoffs.sql](../supabase/migrations/064_multiplayer_fast_handoffs.sql) | Bound first-round handoffs and streamline result snapshots |
| [065_multiplayer_privileged_creation.sql](../supabase/migrations/065_multiplayer_privileged_creation.sql) | Apply the two creation exemptions for privileged organizers |
| [066_password_signup_identity_boundary.sql](../supabase/migrations/066_password_signup_identity_boundary.sql) | Harden the password-signup identity boundary |
| [067_multiplayer_submission_signals.sql](../supabase/migrations/067_multiplayer_submission_signals.sql) | Signal submission status changes to other players |
| [068_account_moderation.sql](../supabase/migrations/068_account_moderation.sql) | Support required renames, suspension and protected moderation |
| [069_account_moderation_retention.sql](../supabase/migrations/069_account_moderation_retention.sql) | Bound moderation retention and handle deletion |
| [070_multiplayer_fixed_penalty_scoring.sql](../supabase/migrations/070_multiplayer_fixed_penalty_scoring.sql) | Introduce the fixed wrong-answer penalty and version-3 speed points |
| [20261021172255_daily_challenge_question_submissions.sql](../supabase/migrations/20261021172255_daily_challenge_question_submissions.sql) | Save community problem suggestions in the private review workflow |
| [20261022015150_daily_challenge_new_york_time.sql](../supabase/migrations/20261022015150_daily_challenge_new_york_time.sql) | Apply New York calendar dates to the daily challenge |

### Operational SQL outside the migrations

| File | Purpose |
| --- | --- |
| [guest-player-removal-preview.sql](../docs/sql/guest-player-removal-preview.sql) | Review the target and affected guest records before removal. |
| [guest-player-removal.sql](../docs/sql/guest-player-removal.sql) | Perform the scoped guest-player removal operation under the script’s safeguards. |
| [moderation-retention-preview.sql](../docs/sql/moderation-retention-preview.sql) | Preview moderation records affected by retention. |
| [moderation-retention-verify.sql](../docs/sql/moderation-retention-verify.sql) | Verify the installed moderation-retention behavior. |
| [multiplayer_health.sql](../supabase/multiplayer_health.sql) | Inspect multiplayer room and worker health. |
| [predeploy_audit.sql](../supabase/predeploy_audit.sql) | Inspect database configuration during predeployment review. |

## Earlier SQL path and local-only files

The full history contains 77 distinct SQL paths. The additional historical path is the former 057 filename for multiplayer room settings. Its [renumbering commit](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9acbab0d946fb856ddc835ae9a362c03d6672cec) and the [settings rollout](../docs/multiplayer-settings-stage-1.md) explain how it became 059. Numeric gaps alone do not establish what is installed on a particular database.

The local working copy also contains three untracked migrations at the review date. They address login-function permissions (055), anonymous private-table write permissions (056), and server-managed Challenge writes (20261012012438). They were inspected separately, excluded from the 76-file snapshot count and left untouched. Their existence in a working directory does not establish deployment.

## Commit history

Each entry links to a complete commit and shows its author date and original subject. Month totals are July 5, August 494, September 127, October 80 and November 6. Open a month to browse its entries. Repeated subjects commonly represent a change split across files.

<details>
<summary>2026-07 · 5 commits</summary>

- 2026-07-13 · [076739e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/076739e4a4dbf937b6dcb9bf5b733df3eca95478) · Initial commit from Create Next App
- 2026-07-14 · [78e6ff7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/78e6ff706a26148dddc77d4d5fb1a2cf11503a7a) · Create website navigation and placeholder pages
- 2026-07-24 · [e06db19](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e06db19b2ff5d54a3d64045189aa082b6324c416) · MAO current working version
- 2026-07-31 · [19fb567](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/19fb567ddc6690b2c9a0b59197521350bdb0ebf8) · Finish MAO Trainer V1 cleanup
- 2026-07-31 · [8c85a5d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8c85a5dc2f043ab7061745ebf87427f1e5df796c) · Add dashboard progress and multiplayer placeholder

</details>

<details>
<summary>2026-08 · 494 commits</summary>

- 2026-08-01 · [18e6b8d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/18e6b8d85478d3c06a3cf0e20c3342447c15171b) · Polish dashboard overview
- 2026-08-01 · [6f1d3c8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6f1d3c854936d6f9a0a1db9920ae6c2266555a80) · Dashboard Pack 2B
- 2026-08-01 · [05ad2ee](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/05ad2eef588e6b2c19d1672d96fd3c6a27375688) · Dashboard Packs 2A-2C
- 2026-08-01 · [0e81302](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0e8130292d423c57d4e95ea12a0867be25bd6c37) · Add dashboard trainer section
- 2026-08-01 · [ab49089](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ab49089006ef4c8dbb2b66a84a5e3c9b914c40a3) · Extract dashboard trainer section
- 2026-08-01 · [e6b63d7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e6b63d7fb9a0c10303da7a226deb6b23df6c2a06) · Extract recent trainer sessions section
- 2026-08-01 · [92a4415](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/92a4415f98e50b9ad38ee3a488ef43a04d5c2514) · Use recent sessions section component
- 2026-08-01 · [b58fc14](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b58fc14cb579a02d56bc3c33dfa901b85fcfe4f8) · Extract question bank dashboard section
- 2026-08-01 · [4a3b17c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4a3b17cb38e48cac219c77e12066cfc1eb7dfa13) · Use question bank dashboard section
- 2026-08-01 · [b8e1d6d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b8e1d6dd32b36d71b6521dff91d4a647f5e914a2) · Add multiplayer dashboard section
- 2026-08-01 · [f353b8c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f353b8c85c43b1670b28480aeeeec329f946b086) · Extract multiplayer dashboard section
- 2026-08-02 · [921d144](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/921d144d27fd95f1857e39ee6d01bbfdace4cf2f) · Install Supabase and update Next.js
- 2026-08-02 · [361001c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/361001c466c9086132fc96e29ce9e47684a64e18) · Add Supabase browser client
- 2026-08-02 · [773cc62](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/773cc62fb909ab463550446c243ba825f4690bef) · Add Supabase server client
- 2026-08-02 · [102ca0b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/102ca0ba97cf7c988af0cb37f8c4783054025f4c) · Add Supabase session refresh helper
- 2026-08-02 · [12f378f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/12f378fda19371c28e5260e2c83b8feac1842742) · Add Supabase auth proxy
- 2026-08-02 · [8132e60](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8132e60732a60964ccbe30b21634a34dab08ea1f) · Add authentication user data schema
- 2026-08-02 · [d333b29](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d333b29df7e8361bc7a53270fe7d1631b1eff0ab) · Add signup form
- 2026-08-02 · [c5dea2a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c5dea2a8ec159cda436b03ff84f5aa6801a01ee3) · Add signup page
- 2026-08-02 · [b70b6bf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b70b6bfe25427b98f136ec4fe2fd7934373c7bf1) · Link login page to signup
- 2026-08-02 · [d0fbc66](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d0fbc660fdf3e9ceff8206381e54be140305ad7c) · Add username availability check
- 2026-08-02 · [b5152fb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b5152fbf45e34d2cd28684d1a565522168bf4407) · Improve duplicate username handling
- 2026-08-02 · [39a5491](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/39a549171da72c55b795a73b38fd619d936390b8) · Add server-only Supabase admin client
- 2026-08-02 · [4c5dc0e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4c5dc0ea5c1b358d0452351a0ca557eb3c868928) · Add secure username login route
- 2026-08-02 · [b95b2b0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b95b2b010b1b42f682e6d90bc67a439ea78d6f4b) · Add authentication service
- 2026-08-02 · [78c4c61](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/78c4c61078e7c716a376a0664a1d5d1a19bfeff6) · Fix auth service username check
- 2026-08-02 · [d4390f0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d4390f0d69ad4a8459df0282a991e466d04be7e9) · Move signup logic into auth service
- 2026-08-02 · [1d193c2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1d193c2002722a3f3cd30414f4e7188bdb576339) · Add username login form
- 2026-08-02 · [3aa1a28](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3aa1a280a39bc3529d1e331d04e61b75f7108b7f) · Add login page
- 2026-08-02 · [68c07b7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/68c07b744827728f64cd6c57f061924197d33c3f) · Add logout auth service
- 2026-08-02 · [0cc486c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0cc486ca9612665dcf59db65bdef67ce0cd5c9a2) · Add logout button
- 2026-08-02 · [e3e14b0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e3e14b0551b0454745fda5dbe40cf4d485bfc556) · Make navbar authentication aware
- 2026-08-02 · [5628df8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5628df851fccda1eef086436f6151bb426390d77) · Protect dashboard route
- 2026-08-02 · [591d095](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/591d095d204c8d4ea63910a290eb09317b5b5130) · Redirect authenticated users from login
- 2026-08-02 · [70bf1f8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/70bf1f86e834455132101e8e52861eabf96330c1) · Redirect authenticated users from signup
- 2026-08-02 · [073db8a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/073db8a23e17db9b425eb58999a49ac3fc8ba8ac) · Add progress storage contract
- 2026-08-02 · [9fad236](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9fad236a425df71d41948fa2832fd5049bc79204) · Add guest memory progress storage
- 2026-08-02 · [b5b7c1d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b5b7c1d717c3e5ee7a7ba80daa54cdf14ec799e4) · Add Supabase progress storage
- 2026-08-02 · [f58c615](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f58c615e8de594462e5ce7ba9913f9a89d2a2b7c) · Add progress service
- 2026-08-02 · [4d7e45b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4d7e45b6f39b8aff6dd84934a84d995ecd7f4266) · Migrate question progress to progress service
- 2026-08-02 · [d6abc67](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d6abc6741416835df961400823b98d27717f566a) · Add bookmark storage contract
- 2026-08-02 · [ecd8d0a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ecd8d0a2b0d8f7149d670202f675f2ca9d4cbb13) · Add guest bookmark storage
- 2026-08-02 · [32b311d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/32b311dec3fb6f45333910930378d874d2e8d54f) · Add Supabase bookmark storage
- 2026-08-02 · [1e24e0b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1e24e0b1b16a23d37bae8d164a91c8f0ce134486) · Add bookmark service
- 2026-08-02 · [43eea70](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/43eea70b33778c6204b1c4e64a54ed91ab026d11) · Migrate question bookmarks to bookmark service
- 2026-08-02 · [2f1223c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2f1223cd8d2c3772aeb0983684625bfd7cdbc73b) · Add level storage contract
- 2026-08-02 · [e5e6651](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e5e665189cd56afc5ec786405a81328a7a6767fe) · Add guest memory level storage
- 2026-08-02 · [e21fafd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e21fafd836214ffd8666d933144ef16e476962b2) · Add Supabase level storage
- 2026-08-02 · [0f3936f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0f3936f80dae3a2a3e6cac0e0c705a24145ee089) · Add level service selector
- 2026-08-02 · [a9f2ed8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a9f2ed8f0675d3e82473dd532da5521cf2d24bda) · Wire Trainer to progress and level services
- 2026-08-02 · [c42c2a5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c42c2a5d1ce536371b85db66c84d083934b1bc35) · Fix progress storage session detection
- 2026-08-02 · [074aae3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/074aae39c83c722b838b1253268081333fa293a3) · Fix level storage session detection
- 2026-08-02 · [4a227d4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4a227d4f10aa422735ff0dcd088e4752431c6330) · Use browser session for level storage
- 2026-08-02 · [628233e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/628233e499a8e9530ab2abaef298e52c667e0879) · Add trainer history storage contract
- 2026-08-02 · [8b42aa8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8b42aa8a76b275de76717e2ef7426bf021e54c39) · Add guest trainer history memory storage
- 2026-08-02 · [ff32cbc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ff32cbc3575b07a7b75a3be936b62a85c307cbe2) · Add Supabase trainer history storage
- 2026-08-02 · [0819237](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/08192374646a9331e95ee91fe305a88ca1b65a99) · Add trainer history service
- 2026-08-02 · [07775c4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/07775c44b880acc51858be8b527604da10374a3b) · Save trainer sessions through Supabase history service
- 2026-08-02 · [e5bbe9e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e5bbe9e654670a0974f319d991ef6dd73e672d85) · Make dashboard question summary data-driven
- 2026-08-02 · [e09e653](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e09e653e382f0fa5ec9845424434250e7813e7d3) · Load dashboard data from Supabase services
- 2026-08-02 · [9a1045f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9a1045fa3de18294537727a2101a29de039a675a) · Await Supabase-backed dashboard data
- 2026-08-02 · [c37df5b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c37df5bd21cba67b3f26dad506bb2c602e9c2f77) · Expose guest progress snapshot for question grid
- 2026-08-02 · [11e1df8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/11e1df89c56d848c260d53191fcdaac396418269) · Expose guest bookmark snapshot for question grid
- 2026-08-02 · [cf02652](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cf026529084089df60adf0e73b064a8fc8a59787) · Add bulk question bank user data service
- 2026-08-02 · [4baa97a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4baa97abf55d2dbd4ccfd5f8e65785bbabe47b16) · Migrate question bank grid to Supabase-backed user data
- 2026-08-02 · [fe8f9f0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fe8f9f015ece8ab41e0d92ae3c959464f68e7b9c) · Remove obsolete localStorage progress module
- 2026-08-02 · [9884b62](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9884b62d3bd10ecc6989818ada2013aca285c750) · Remove obsolete localStorage bookmark module
- 2026-08-02 · [ab9e570](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ab9e57021b98f2ded08d7b9e941ff6c184ee5448) · Remove obsolete localStorage level module
- 2026-08-02 · [711c7d3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/711c7d387de77aede015bdc04f64861c0469826f) · Remove obsolete localStorage trainer history module
- 2026-08-03 · [ad976b6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ad976b6ba4d98d2203721e51ee09a68ecb7f18aa) · Add username to dashboard data
- 2026-08-03 · [d6136f8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d6136f87742257ae57c0d46b90583f9dc446c62b) · Upgrade dashboard welcome hero
- 2026-08-03 · [f47cf33](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f47cf33f750fdc962e464cf42a8d70e5563dd789) · Connect dashboard hero to user data
- 2026-08-03 · [9215d79](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9215d79b9e148dc0b5ca20552e72b33adb268bc7) · Fix Trainer cooldown after progress cleanup
- 2026-08-03 · [7878f5d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7878f5d6fa36dfe37daee8ca3124d7f3c61d6402) · Await async Trainer question selection
- 2026-08-03 · [023729b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/023729b047f5f1f4fcc87c2cfd53f4dfdf4ac4bc) · Polish dashboard overview statistics cards
- 2026-08-03 · [03ab0c5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/03ab0c5651eb70ee110a40982ee4e4b740bfe5cb) · Add trainer analytics summary metrics
- 2026-08-03 · [bd9f2d0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bd9f2d032b55a81a74df36bd3caf8443b573ffe2) · Expand dashboard trainer analytics
- 2026-08-03 · [e327090](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e3270907506154393b91b7cc95f26cc54feed62f) · Add trainer chart data to dashboard summary
- 2026-08-03 · [a350d1a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a350d1abd46c8501825a68ddeeb7f28fe2c78fb4) · Add trainer charts section
- 2026-08-03 · [e41e483](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e41e4833b15eb94569ffaf042bfd6a5e94daee01) · Show trainer charts on dashboard
- 2026-08-03 · [ce1c9d0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ce1c9d0439b1e460ee592e84998e520597d59315) · Add recent dashboard activity aggregation
- 2026-08-03 · [61f07b8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/61f07b83ede4c3c8fa3f96e4d18f7159cf4cdd6d) · Add recent dashboard activity feed
- 2026-08-03 · [89e63df](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/89e63df3578f6e4e2f79d54cb61743606465eddc) · Add recent activity and move multiplayer above trainer
- 2026-08-03 · [3440632](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/344063231bc21cf866d29812050a1d92eb42f848) · Add dashboard achievement preview
- 2026-08-03 · [8697f39](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8697f39450044cea35085eaa1773080e73fd1311) · Add achievement preview to dashboard
- 2026-08-03 · [c43e6d2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c43e6d2955536a630de3a18e5d25f8b885f75ef9) · Remove achievement preview from dashboard
- 2026-08-03 · [db70f90](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/db70f90943d8019805bdfcb472bf280c450ac0ae) · Delete achievement preview component
- 2026-08-03 · [86b1ab3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/86b1ab3f300a23dd5b205c0109c5c7c44be4e82d) · Fix dashboard chart bar visibility
- 2026-08-03 · [ab55356](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ab55356c7d9902505b5468c183d277222bce2f2a) · Add Challenge architecture types
- 2026-08-03 · [ac37eac](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ac37eac031ff4dd27619cc51f784340a3f77cca9) · Add Challenge service boundary
- 2026-08-03 · [1fe68ad](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1fe68ad953622af23842097380178ba5ad9b6018) · Add Challenge feature entry point
- 2026-08-03 · [8b26b51](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8b26b51554ab141c0f2f642230b822566f5f8368) · Refresh Challenge placeholder for architecture pack
- 2026-08-03 · [c4cd2c7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c4cd2c7e7f0f2abab67c492a97c00e51c1e009d8) · Challenge C2 - Database Schema
- 2026-08-03 · [c292331](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c292331384dc5ae67bcd1d81c648ba4b17e9456d) · Challenge C3 - Question Bank
- 2026-08-03 · [9c68945](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9c68945075494a004bd4e6a22b7c65d7b4da8dea) · Challenge C4 - Daily Challenge Service
- 2026-08-03 · [b945574](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b945574e6514e24f014a83d917175628094f8377) · Challenge C5 - Challenge Page
- 2026-08-03 · [0de9f17](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0de9f17b354de2559e4aa5622e9c67f43000f4e4) · Challenge C3 - finalize custom question bank
- 2026-08-03 · [95b1518](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/95b1518ce3efe8f27f4a5281466ff0849477ab7c) · Challenge C3 - export question bank helpers
- 2026-08-03 · [3f7cb79](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3f7cb798d9f562a4e11a351ef4f4103069491b8c) · Challenge C4 - Daily challenge service
- 2026-08-03 · [284c2e2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/284c2e27a2885ffb68eb96e4e18a83af3cd34f0b) · Challenge C4 - Export daily challenge helpers
- 2026-08-03 · [88f9460](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/88f946095de1cf0158b65cb936e082f5e40bdb54) · Challenge C6 - Add atomic submission migration
- 2026-08-03 · [58d5b45](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/58d5b451026b85e31c751ed70161feb9a3e4c06f) · Challenge C6 - Add submission result type
- 2026-08-03 · [9653af4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9653af4d4852ae777ddab73a1c54bb494f68c1ee) · Challenge C6 - Implement secure submission
- 2026-08-03 · [eca1ec8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/eca1ec85d04cb3e5ce2a3c7c6c59f61634ca4797) · Challenge C6 - Add submission action
- 2026-08-03 · [03cf35b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/03cf35bae081eda6d4eab03c7776082c82dd7ecb) · Challenge C6 - Add answer form
- 2026-08-03 · [9057dfb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9057dfbc2c19036a5738c511551460688a039740) · Challenge C6 - Enable one-attempt UI
- 2026-08-03 · [2692cd2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2692cd296fdbc3f91c796ea86884ff8592d77634) · Challenge C6 - Export submission result
- 2026-08-03 · [1eb9be0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1eb9be0c2ba9e4f6a8bdb30e8ed7ec0945b9d153) · Challenge C7 - Add solution result fields
- 2026-08-03 · [8c34e08](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8c34e08e72cbcd6b211d22f89ebdb5fd8292a334) · Challenge C7 - Return solution after submission
- 2026-08-03 · [303744e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/303744e1c6afa4ffad5d0fc5fa40f6f5fe411531) · Challenge C7 - Add solution state
- 2026-08-03 · [1ce9f7d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1ce9f7dc97e7619bce237014890e840f85f2148e) · Challenge C7 - Restore solution on reload
- 2026-08-03 · [0c3495d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0c3495d65e62ad727325876f7dbfd37ecc58db9b) · Challenge C8 - Add leaderboard function
- 2026-08-03 · [a40c817](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a40c8171e5215e8212bde15c3681b2fff1878630) · Challenge C8 - Implement leaderboard service
- 2026-08-03 · [5c14590](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5c1459091801432d91efab8e35d2254e48c970dd) · Challenge C8 - Add leaderboard component
- 2026-08-03 · [5c67e47](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5c67e47cd98cc810c23d333ec9fd1a55cecf7235) · Challenge C8 - Show Top 20 leaderboard
- 2026-08-03 · [662daf6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/662daf67884aefb1cb571595d76fce1e1ff9c068) · Challenge C8 - Rank ties by daily submission
- 2026-08-03 · [83e26ba](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/83e26bac227ff87dcd2a6bc3cf3b088aed6569ef) · Challenge C8 - Show current streak only
- 2026-08-03 · [9eb8cd7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9eb8cd7b6a341f474d0496ddd599728751cb2577) · Challenge C8 - Hide question ID
- 2026-08-03 · [9d8b58c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9d8b58cf36586d500dfaa0234131637b1c6fa637) · Challenge C9 - Add personal rank function
- 2026-08-03 · [4e71123](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4e711236f16ca98f4ca999146921d9cf81738577) · Challenge C9 - Implement personal statistics and rank
- 2026-08-03 · [0ce1ab2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0ce1ab2e3302dae261e754862151cf2b1b7b72ca) · Challenge C9 - Add personal record component
- 2026-08-03 · [53a0987](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/53a0987450ad499e8c5b211678e946b66bb1f62e) · Challenge C9 - Show personal rank and statistics
- 2026-08-03 · [9d6ec38](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9d6ec385a569ab88b7ba6b5f823f570d4f8b97ef) · Challenge C10 - Simplify Challenge header
- 2026-08-03 · [1f53b14](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1f53b142dbb78c7d101c0036abb78b2b8b1d5791) · Challenge C10 - Load dashboard streaks
- 2026-08-03 · [024808d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/024808db1cfc62cdc095b870cb51931cbdfffe59) · Challenge C10 - Add dashboard streak section
- 2026-08-03 · [e235889](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e23588981d27f33cb1e896225ff50bfd92898511) · Challenge C10 - Show dashboard streaks
- 2026-08-03 · [6e14d09](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6e14d09a49a641d028adc505690f4d5349fc6ce7) · Challenge C11 - Fix public read boundaries
- 2026-08-03 · [6da6082](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6da6082dffaa6976aad19fdc5396dd8eb421710c) · Challenge C11 - Use publishable client for reads
- 2026-08-03 · [84e8ebb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/84e8ebba59b5aa8e52a40134888d1e120e9c5503) · Challenge C11 - Complete Challenge overview
- 2026-08-03 · [6f9a5db](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6f9a5db6d1658e342a06b7c13b03d70d8a25a76b) · Challenge C11 - Consolidate page loading
- 2026-08-04 · [58cb526](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/58cb52642d812a9384fd3906f52892276f3d6ebc) · Multiplayer M1 - Add shared types
- 2026-08-04 · [b6ab55d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b6ab55d84a71ce92b0c90eb57440adaa8c5723eb) · Multiplayer M1 - Add service boundary
- 2026-08-04 · [952d0af](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/952d0aff68f1a791ce03ae782e2efd8dc5b307db) · Multiplayer M1 - Export architecture
- 2026-08-04 · [60d1a51](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/60d1a51ed131aaeaac9890db5cb6b3e3877eb126) · Multiplayer M1 - Refresh placeholder
- 2026-08-04 · [c11ac93](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c11ac93397102517788c586a3015cfa9ea4208aa) · Multiplayer M2 - Database Schema
- 2026-08-04 · [4570130](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/457013092fcf5f8208c7d8897424839c58e62edf) · Multiplayer M3 - Private Room Setup
- 2026-08-04 · [d5594b8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d5594b8d4507e1330ee0e8681c258bebef1a0e19) · Multiplayer M3 - Private Room Setup
- 2026-08-04 · [ea28212](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ea28212f913942e2e87526b8efb007aa76b4fda3) · Multiplayer M3 - Private Room Setup
- 2026-08-04 · [5cdf7b4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5cdf7b42b7cde54d54ac24c0e4f0f7ca33bdf818) · Multiplayer M3 - Private Room Setup
- 2026-08-04 · [dcc383f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/dcc383f58b5a8254ebc0f8e8f0476d86a2e4b2d0) · Multiplayer M3 - Private Room Setup
- 2026-08-04 · [c9a281a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c9a281ac4c041bcb1894609d764d852414ea0405) · Multiplayer M3 - Private Room Setup
- 2026-08-04 · [e9cf997](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e9cf997abd21f9e1394e9ab5cccd0265d3c616ba) · Multiplayer M3 - Private Room Setup
- 2026-08-04 · [f5ac480](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f5ac480a9e6cac0ca016bcbeca5ada3f125b99f5) · Multiplayer M3 - Private Room Setup
- 2026-08-04 · [d6d3e18](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d6d3e18155af8f9248b0bbd6f14d82fd54a53ca8) · Fix M3 uploaded file contents
- 2026-08-04 · [7cac7f1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7cac7f163b40e6c3075ee0922186ef0fe9d23596) · Fix M3 uploaded file contents
- 2026-08-04 · [bef4b8e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bef4b8e77527b279edb6a9069d4d9c56fc06d1e8) · Fix M3 uploaded file contents
- 2026-08-04 · [d0e5b5b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d0e5b5bb450f17feb69179a88172e7d732fa1f7c) · Fix M3 uploaded file contents
- 2026-08-04 · [3daec92](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3daec921458fc45dbe4c1c8f9771b1ba86b42c7b) · Fix M3 uploaded file contents
- 2026-08-04 · [9d35cd8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9d35cd8035c89e3936c565f4c5472975fb9aefec) · Fix M3 uploaded file contents
- 2026-08-04 · [0cb3527](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0cb35274ebdb6024382e82adca68a060c580633c) · Fix M3 uploaded file contents
- 2026-08-04 · [a211e49](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a211e49248df5814374042bd634884b385e13967) · Fix M3 uploaded file contents
- 2026-08-04 · [0a7049a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0a7049a5497ee41a32371fca22585a8c0a66dea3) · Clean M3 source file headers
- 2026-08-04 · [3e4f0e0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3e4f0e029a3538bb23ae72015f3e24a5e3aa3bbd) · Clean M3 source file headers
- 2026-08-04 · [adba5bf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/adba5bf5715f9dee8307a8cbc45785490017c6c1) · Clean M3 source file headers
- 2026-08-04 · [4a63da6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4a63da609f1c9d1bb39408568f8cdc11c3162ab3) · Clean M3 source file headers
- 2026-08-04 · [4b49889](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4b4988949dd984d93c216a6254b87318ab15870c) · Clean M3 source file headers
- 2026-08-04 · [fb7e81c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fb7e81cda6ed4ffb380f2b4f3ebdae362f17d7f5) · Clean M3 source file headers
- 2026-08-04 · [5d5256e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5d5256e882aa1ed36109195f91adaeb3ab1aebb8) · Clean M3 source file headers
- 2026-08-04 · [bae5960](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bae5960ba455ac15c3ddfb6d48cfde72b37e6460) · Clean M3 source file headers
- 2026-08-04 · [455d4cf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/455d4cfd64033e8bf4ef03151bc77114acefd21a) · Refine private room creation flow
- 2026-08-04 · [7a80738](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7a80738bda0757acaccf604f4f5933839b1df737) · Refine private room creation flow
- 2026-08-04 · [29d02a6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/29d02a69969c6a6b27a551f0132f6441c68e1ca2) · Refine private room creation flow
- 2026-08-04 · [c6eeb16](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c6eeb169a945de8b8e049c971240b52e0f0d3865) · Compact multiplayer room cards
- 2026-08-04 · [d2427d3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d2427d330fe82ff81f1cfa9af60d09c16f7602d7) · Multiplayer M4 - Private Lobby
- 2026-08-04 · [d052336](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d052336b26916d79dcce834cf17c5c59172e57a3) · Multiplayer M4 - Private Lobby
- 2026-08-04 · [d4d7a38](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d4d7a380f9efdf17e861890d8f435539455fa0de) · Multiplayer M4 - Private Lobby
- 2026-08-04 · [01d8e9b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/01d8e9bc0fab78d7710be4d54963bc307a6a404f) · Multiplayer M4 - Private Lobby
- 2026-08-04 · [1500b66](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1500b66c13303340edefdde0113316d53e5270bf) · Multiplayer M4 - Private Lobby
- 2026-08-04 · [39691d9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/39691d92d126109538e465645470891f60818094) · Multiplayer M4 - Private Lobby
- 2026-08-04 · [a3cf000](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a3cf0003adf961249c3b86aef08020ec5f0a91b6) · Allow flexible guest nicknames
- 2026-08-04 · [df3ad20](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/df3ad208e4c949ec8d43bae6c32d4395ece70259) · Allow flexible guest nicknames
- 2026-08-04 · [6d76103](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6d76103575b28a5068504254f55d40424224bf4d) · Allow flexible guest nicknames
- 2026-08-04 · [e45de91](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e45de9164a11121583b78798df6f832beba80308) · Allow flexible guest nicknames
- 2026-08-04 · [befa7ac](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/befa7ac3fd2efbf491663b0e83343dacf9934881) · Fix private lobby presence
- 2026-08-04 · [05e88f2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/05e88f23fc0e59884e0591a74e3c58c535ccd6fe) · Fix private lobby presence
- 2026-08-04 · [e9ba1db](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e9ba1db231d8ad3f7a8c579cbd2a73e7213475ed) · Fix private lobby presence
- 2026-08-04 · [4a7c022](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4a7c0221adc55825f3447c97539a0a3d5da4f6b8) · Add temporary 30-question division banks
- 2026-08-04 · [db75b2c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/db75b2cf8b1e99aac8365d9b7b44f6422612f3af) · Multiplayer M5 - Match Start
- 2026-08-04 · [b67f4c5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b67f4c5b91eb5fd3189b227a794110ff08bb6712) · Multiplayer M5 - Match Start
- 2026-08-04 · [b82cfc1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b82cfc1910455d78847b4f04d98b1153fd4b2b99) · Multiplayer M5 - Match Start
- 2026-08-04 · [b6c2945](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b6c294504389435fba9cad7e13d149bf86e5ff27) · Multiplayer M5 - Match Start
- 2026-08-04 · [8e9c05e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8e9c05e5f9a81fb226e8c24d6aa1d0fa649f6e8f) · Multiplayer M5 - Match Start
- 2026-08-04 · [90e2ec1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/90e2ec1444af2054087c77c720d0675a9d8fe286) · Multiplayer M6 - Scoring Loop
- 2026-08-04 · [c202c13](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c202c132c6d5a79538638e660370aeaf8e865c67) · Multiplayer M6 - Scoring Loop
- 2026-08-04 · [3bfe3d0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3bfe3d070cf20c33b8d635a23d41d2869df54522) · Multiplayer M6 - Scoring Loop
- 2026-08-04 · [f5c1885](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f5c18853547c2b6a6918a107d21807e8d6a042ca) · Multiplayer M6 - Scoring Loop
- 2026-08-04 · [9a2ca32](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9a2ca322f557921daae1859f9cee4b033d735a77) · Fix round transitions and instant leaderboard
- 2026-08-04 · [0cb84a3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0cb84a3653070d86a76572b66b0cec2733eecc42) · Fix round transitions and instant leaderboard
- 2026-08-04 · [a4460b8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a4460b802ae417cc54875236791e0290fa8d11a0) · Multiplayer M7 - Results and RP
- 2026-08-04 · [6b8cc5e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6b8cc5e919102f839d97705db0ee331024dccffb) · Multiplayer M7 - Results and RP
- 2026-08-04 · [638e66b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/638e66b6597bb2e61390507ca421b89651242fa0) · Multiplayer M7 - Results and RP
- 2026-08-04 · [a1afa0c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a1afa0c64f19107f3cacc8f8c5de7034021c463b) · Multiplayer M7 - Results and RP
- 2026-08-04 · [77bbdc5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/77bbdc50705d63d16078d9ccfce53a0291a2b2f3) · Multiplayer M7 - Results and RP
- 2026-08-04 · [73fa869](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/73fa8699a0fd7ab23583633b140909e466a84f26) · Speed up multiplayer score updates
- 2026-08-04 · [7a70a13](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7a70a1395dfecfdf9185a7f29aada14a3ed3799d) · Multiplayer M8 - Public Room Directory
- 2026-08-04 · [e84a6b5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e84a6b5654d165913f411caabeb6f1dec8a38465) · Multiplayer M8 - Public Room Directory
- 2026-08-04 · [d5c2bbf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d5c2bbfab70cec29902d5d98d66afa46eac1241f) · Multiplayer M8 - Public Room Directory
- 2026-08-04 · [4337d4a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4337d4a307afe822d08e9373151cd87b3fc8ec35) · Multiplayer M8 - Public Room Directory
- 2026-08-04 · [f941604](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f941604a5e4eb31bfcf01e1a8e634b3bfe33356f) · Multiplayer M8 - Public Room Directory
- 2026-08-04 · [518f5e2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/518f5e24df3e5452616124e4209a2586c494e614) · Multiplayer M8 - Public Room Directory
- 2026-08-04 · [58040c1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/58040c1df13cd7eaee1940d26e072eaef29c6479) · Multiplayer M9 - Public Match Lifecycle
- 2026-08-04 · [8be933e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8be933e2decf8e15abcb3774d9386d77df60916d) · Multiplayer M9 - Public Match Lifecycle
- 2026-08-04 · [7cf4727](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7cf472793afbd306d21ebe805bfafe83237b3fd5) · Multiplayer M9 - Public Match Lifecycle
- 2026-08-04 · [08d0838](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/08d083868a146eb83e54827e24b0367f12e05a3d) · Add multiplayer game rejoin options
- 2026-08-04 · [3121662](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/312166231a4d015636aab2d674509da2387b65fc) · Add multiplayer game rejoin options
- 2026-08-04 · [dad5099](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/dad5099f6888bbd300060ef70d23d33d4fa75c03) · Add multiplayer game rejoin options
- 2026-08-04 · [670e938](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/670e938d24fdfc4b2fcca2e99ac20ae0b7aa67a7) · Move rejoin into ongoing games
- 2026-08-04 · [38f7b8d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/38f7b8dcd39256df8c728d1e6f1b27d77d47e435) · Hide and expire abandoned matches
- 2026-08-04 · [05bf9eb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/05bf9eb946ae619a9c46bf770b90c1fd533507a2) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [2bd52c1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2bd52c18e51f10dedd5a9af7106ce4bc80c92d74) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [2db217e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2db217e7d7015b022c94580cd05e4b1675692b8f) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [b6894cb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b6894cb8676be079cb7c50bde942519f26fb6c6c) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [0f262d9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0f262d9cacbd6dafec827849f2074686c5524153) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [fb5c018](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fb5c0186fa3f9b4902aec43ee64cb54b12152939) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [8840f22](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8840f22c661fd80b9bf7009c42a5ff6a3186843c) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [59efaeb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/59efaebdb0efb9992a5db21d89c558ad5fab5ba7) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [3abc398](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3abc398cb8ce1cb38bf05074d090019939305c00) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [6ed0924](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6ed09242c052350bb00f2804b9f34dc9e28d6b72) · Multiplayer M10 - Live Spectating
- 2026-08-04 · [443eba1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/443eba101b8e62d31067c1bb53dff911c027a7ff) · Move spectator roster beside live match
- 2026-08-04 · [e64738e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e64738e831bfa9eb1f9b08bfa4fa9dd6e6a7f33e) · Multiplayer M11 - Rating Profile and Leaderboard
- 2026-08-04 · [8913a37](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8913a37e79bb61af61bf7d81bf97dce9b94c6316) · Multiplayer M11 - Rating Profile and Leaderboard
- 2026-08-04 · [757825a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/757825afe36bae4fc5a97bce5cc5858dcfcd5f8f) · Keep RP leaderboard beside public rooms
- 2026-08-04 · [33f0466](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/33f04668a4a4d07cf90e7ba3d01086c4ee82a0ab) · Always show multiplayer rating panels
- 2026-08-04 · [3d046d3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3d046d391a79ed62f354c55d925827f957ae5cb1) · Arrange multiplayer dashboard into fixed sections
- 2026-08-04 · [e3b4767](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e3b4767626fb97dd810b005b490624a7f297a2e5) · Force desktop multiplayer column layout
- 2026-08-04 · [8472eab](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8472eabde360edad7d2b1313ed05a36fa188ec94) · Multiplayer M12 - Dashboard Statistics
- 2026-08-04 · [8eb6e76](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8eb6e7638f442055ef86f3b929faaba5e7942cb3) · Multiplayer M12 - Dashboard Statistics
- 2026-08-04 · [4fead9b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4fead9b82d98576a0b54a156c91019bbd49ecad4) · Multiplayer M12 - Dashboard Statistics
- 2026-08-04 · [c27681e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c27681eb7b1b9d4dcba9d21da6ac007033704acb) · Add visual themes for multiplayer ranks
- 2026-08-04 · [3db7e93](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3db7e93307b7de3ead19ae1e9bbaa2dac2410166) · Add visual themes for multiplayer ranks
- 2026-08-04 · [80c4558](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/80c45588f21afdca56ff37ea1c1048c4951188fc) · Add visual themes for multiplayer ranks
- 2026-08-04 · [16de59c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/16de59cb4716d56d5889f19d2fb5cf96db0176f4) · Add visual themes for multiplayer ranks
- 2026-08-04 · [b80fd7d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b80fd7dcf5ecfb137dda04d31bd30da253e34220) · Bundle multiplayer rank styles with components
- 2026-08-04 · [56d6912](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/56d691209914e4aac63038f37ca46e243fda07d3) · Bundle multiplayer rank styles with components
- 2026-08-04 · [7b26ce5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7b26ce5c95a47f3f2c1377f3669d332a3dec7d72) · Bundle multiplayer rank styles with components
- 2026-08-04 · [c8de420](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c8de4203aa53cdf265bab781f7a9bdda47a1c02a) · Bundle multiplayer rank styles with components
- 2026-08-04 · [81035c0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/81035c0d6d641eb697d3bb0a16a06812b78649dc) · Improve multiplayer dashboard contrast
- 2026-08-04 · [8ff5d2b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8ff5d2bbaec28045da16ffcbc5314c8740c9d193) · Improve multiplayer dashboard contrast
- 2026-08-04 · [5182674](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/518267483c31d3abbfe9d38d6585e4f6d5ed7d53) · Apply rank theme to multiplayer lobby
- 2026-08-04 · [4516f1d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4516f1d324af75901d48a42ba450e6f3e9ee798a) · Apply rank theme to multiplayer lobby
- 2026-08-04 · [0f31486](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0f3148619e205e2eed3e4c8ee1bf609b581d9f01) · Apply rank theme to multiplayer lobby
- 2026-08-04 · [518007d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/518007dfc032aad25ac33c69df20b3d70722a597) · Retry multiplayer loads during JWT clock skew
- 2026-08-04 · [1c67d21](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1c67d211b0d805941c93409e71467c41123aed6d) · Multiplayer M13 - Leave and Close Rooms
- 2026-08-04 · [53101cc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/53101cc3314968ca6ad44c1a5173ba9d1e4177ca) · Multiplayer M13 - Leave and Close Rooms
- 2026-08-04 · [7578e81](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7578e8193c27dc069293d304ea674542834f9bbb) · Multiplayer M13 - Leave and Close Rooms
- 2026-08-04 · [71432f5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/71432f5c03b0e2e91787cf3187fff72d00491da5) · Multiplayer M14 - Recent Match History
- 2026-08-04 · [8e88329](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8e88329ae93a417bdbe9c5ebc293adf2786a98ba) · Multiplayer M14 - Recent Match History
- 2026-08-04 · [74d5961](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/74d5961ee39692b3ae08da26b5657feea16806e6) · Multiplayer M14 - Recent Match History
- 2026-08-04 · [fb6c1e6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fb6c1e66cd8c9b998680aad2596daacfa4c282c4) · Multiplayer M14 - Recent Match History
- 2026-08-04 · [cb96871](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cb968717a65b4e0055056a7291d80d63b929d8ac) · Multiplayer M15 - Rank Identity Across Matches
- 2026-08-04 · [97430c5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/97430c510532ef67bf6f3798c965b36a0d0c82cd) · Multiplayer M15 - Rank Identity Across Matches
- 2026-08-04 · [76878a3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/76878a331e4d0790d32f943188b0f4f13c6cbea7) · Multiplayer M15 - Rank Identity Across Matches
- 2026-08-04 · [a7b24bb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a7b24bbfb76aa198b7179fd79b4c849640b76bbe) · Multiplayer M15 - Rank Identity Across Matches
- 2026-08-04 · [6efe3a8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6efe3a8f5818d1ffdbf80fb43d2644f08bb35a88) · Multiplayer M15 - Rank Identity Across Matches
- 2026-08-04 · [5957595](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5957595458d75678d48f412c82d6df1adf822ea9) · Multiplayer M15 - Rank Identity Across Matches
- 2026-08-04 · [9126231](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/912623106969c19035689407f0a9846d99d77393) · Style full multiplayer player cards by rank
- 2026-08-04 · [dd4f7a4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/dd4f7a4326a2a1c50256646bb32d1349fc90a1e2) · Multiplayer M16 - stabilization and cleanup
- 2026-08-04 · [661be50](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/661be50f60ee674c5be49223e207f65d73edbf5e) · Multiplayer M16 - stabilization and cleanup
- 2026-08-04 · [fbd590d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fbd590dd85c506746bbb830941a1085987d65ca7) · Multiplayer M16 - stabilization and cleanup
- 2026-08-04 · [99d6b67](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/99d6b679251917fb42a88be4458a845c2c823a28) · Skip intermission after final multiplayer question
- 2026-08-04 · [15fa11f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/15fa11fb8e7a7fb6891bce9c964cd3dab37e4686) · Skip intermission after final multiplayer question
- 2026-08-04 · [07fcb57](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/07fcb57a1851b98e1450ff57330a49832edaff2a) · Skip intermission after final multiplayer question
- 2026-08-04 · [c1ce59c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c1ce59c745d6dbcd10beefb07b91f4be8b0c1003) · Use full rank colors for multiplayer leaderboard cards
- 2026-08-04 · [a1a9240](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a1a9240a74fd1dc2110fddf3783cfe0fc17063a4) · Use full rank colors for multiplayer leaderboard cards
- 2026-08-04 · [1f0f5ba](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1f0f5bae4f37a2813fd5195507ab6059a5fdbc28) · Use full rank colors for multiplayer leaderboard cards
- 2026-08-04 · [5dd08ea](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5dd08eaf7f1a9a7d67ea53a8a5e3f36ae5610668) · Use full rank colors for multiplayer leaderboard cards
- 2026-08-04 · [4dc094f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4dc094f4ea44cf85f8cc4ca94d7b031b8214b7cc) · Organize question bank by division and add 2025 Mu test
- 2026-08-04 · [f50176b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f50176b75ea274559d908f73fbafd3310be76913) · Organize question bank by division and add 2025 Mu test
- 2026-08-04 · [643a202](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/643a2025b00240045b3a946bf8717e0ede674793) · Organize question bank by division and add 2025 Mu test
- 2026-08-04 · [d79860d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d79860dc27e872fd4cb04c284d5de38f27321391) · Organize question bank by division and add 2025 Mu test
- 2026-08-04 · [de4a85d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/de4a85d4fe278653058b1a3af2889ce39f0a256b) · Complete question bank folder migration
- 2026-08-04 · [0cc86ca](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0cc86cac68efb25333468a2ff20e0eeabbf5cb43) · Render question math with KaTeX
- 2026-08-04 · [d1af0d2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d1af0d2047b13979aa0ed8453d94c2f3cb67f8bb) · Render question math with KaTeX
- 2026-08-04 · [cebd871](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cebd87197365dfeb7d9ac9dbcb827b71de30edaf) · Render question math with KaTeX
- 2026-08-04 · [34dac9b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/34dac9b17228f7a62d94439966e23d680b150f86) · Render question math with KaTeX
- 2026-08-04 · [d931270](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d931270368d95040e4ee8bc5b3cf4820540c6da4) · Render question math with KaTeX
- 2026-08-04 · [7dcc7e2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7dcc7e278b88c103761360ad798c95a4c32dffc9) · Render question math with KaTeX
- 2026-08-04 · [790fda9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/790fda907539fd3f893264f5302c1ef71c851f1c) · Render question math with KaTeX
- 2026-08-04 · [99affbf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/99affbf3e4e4902b25a8482eb3f6c92f808553db) · Add reusable math renderer
- 2026-08-04 · [ee006cb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ee006cbdea90e935f5f0291205a3fd869710c9dd) · Format all Mu question prompts and choices
- 2026-08-04 · [d81343e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d81343e2673be8538ab4cf1de4445827b84fea5c) · Format every Mu solution with KaTeX
- 2026-08-04 · [7e94cc6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7e94cc61dc134554ffcf12d4510634f17cc3cdbd) · Renumber accepted Mu questions sequentially
- 2026-08-05 · [a16d16c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a16d16cad429c2ae282f6ed73c760dc0cb77c017) · Add 2024 Mu individual question set
- 2026-08-05 · [a793601](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a793601880d04609b5d4978c58da743c86394560) · Restructure question bank navigation
- 2026-08-05 · [1aa097a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1aa097a573feefc164a1c436e8fdf2ee586810a7) · Restructure question bank navigation
- 2026-08-05 · [7705271](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7705271fccefff90a33af6bb1c46198281893f0a) · Restructure question bank navigation
- 2026-08-05 · [3e906ee](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3e906ee4fc0e1fd7c4d23dbb16effc36b910e64a) · Add division-specific question bank
- 2026-08-05 · [c92c902](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c92c9029fa857749e9094c122ca927c9f9ad9e38) · Add division-specific question bank
- 2026-08-05 · [eae4912](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/eae4912bbf75537dd20b95e12de74754cfae1481) · Add division-specific question bank
- 2026-08-05 · [2fc172a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2fc172ab8ffcd3c9c8ad00f8cd0bd42bb3f973e9) · Add division-specific question bank
- 2026-08-05 · [ab8d4f3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ab8d4f38af0a74b441eb362834cea3e9a7adab39) · Polish question bank experience
- 2026-08-05 · [d2d317e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d2d317ee44f448b54e621b6d9b49a3bdff7b000d) · Polish question bank experience
- 2026-08-05 · [4370244](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/437024498c164670f0d4aed37010067465abcb69) · Compact and fix question bank layout
- 2026-08-05 · [db63e9b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/db63e9bd6ed3148f9091800718f82ac2e830c5e4) · Compact and fix question bank layout
- 2026-08-05 · [4814e60](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4814e60d656daa59c5619fb9b2ffc89fc92a81f3) · Refine filtered question navigation
- 2026-08-05 · [5f8fc55](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5f8fc550120a542d6e024efaa1009424e28c6e1f) · Refine filtered question navigation
- 2026-08-05 · [741f52e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/741f52ec77dc6f9addc94f7d84c22632a6a53b4e) · Finalize question bank spacing and grid
- 2026-08-05 · [059f0d1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/059f0d19f1921aa6e20397b9ab5c6410e51dcf76) · Center question bank header
- 2026-08-05 · [1f7ece9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1f7ece9d7df219131aa241d562ec91696ebdf97f) · Polish question bank division cards
- 2026-08-05 · [f343d0e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f343d0e3cf85da3e2fd0d5bc0f2de7baceaae051) · Simplify division selection cards
- 2026-08-05 · [5152a2f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5152a2f260b48499a7ac05f4438dd9d4077c38bc) · Space out division selection cards
- 2026-08-05 · [9511cf9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9511cf9f39c1a12acdc59a4fb5f47c91d55c1d85) · Add trainer sidebar layout
- 2026-08-05 · [e13d3bd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e13d3bde0fd6d83f83cf072a235cb67cb99e5ddd) · Compact trainer session panel
- 2026-08-05 · [38a758c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/38a758cf7977592d73fbe421fecd6f93a31f284c) · Tighten trainer question layout
- 2026-08-05 · [cc06a0f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cc06a0f7f10de594602bca58be9988634c512048) · Add trainer stats sidebar
- 2026-08-05 · [2065735](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/20657350f788c831627e111715c11c132fc95a0b) · Move trainer progress to top bar
- 2026-08-05 · [b94a211](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b94a2119735e17a8612e20f274b28742c2dbe963) · Split trainer into top bar and sidebar
- 2026-08-05 · [e85354c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e85354c100ffc019f26bd57a28883e40f13441af) · Emphasize trainer progress track
- 2026-08-05 · [02482ca](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/02482ca9a3705e07d24950eb7c3fe34af10d39d8) · Move end session into trainer sidebar
- 2026-08-05 · [c50bbef](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c50bbef8a3365fc18cb9481e972641473bab0418) · Wire trainer sidebar session control
- 2026-08-05 · [59ec250](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/59ec250da35f4e7df17ab0969738017f65f93c34) · Make trainer progress track visible
- 2026-08-05 · [40e46f1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/40e46f1e53e8f92e744e76fd89c3c1a8f42c1af2) · Separate trainer prompt from answers
- 2026-08-05 · [207377c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/207377cc74c3219ee0067e8bcb6c0df839b72bcc) · Update practice feature descriptions
- 2026-08-05 · [2024d1c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2024d1c370d2fc4bda28c8bb77ed137e0e26d695) · Compact challenge leaderboard
- 2026-08-05 · [0dd6335](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0dd633562c5700cbf7a49b9921c3b4b68c6d11e4) · Compact challenge personal record
- 2026-08-05 · [badec54](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/badec54ad981ac309c55113f8d7c1c55996ba598) · Polish daily challenge answers
- 2026-08-05 · [ab93724](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ab93724fdfdaeabfd8ad8b6d77d83463fbd2e6ff) · Redesign challenge dashboard
- 2026-08-05 · [2feb6e5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2feb6e5952529610cd6dbe9827e5970ec5a9f8d2) · Ensure challenge header visibility
- 2026-08-05 · [4a6f7cd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4a6f7cdf33a97525bb632fd083e1423ed63302a3) · Keep challenge leaderboard rows aligned
- 2026-08-05 · [d522840](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d522840ebd0e6b307b36746d9004702d5b4aae4b) · Strengthen challenge stat cards
- 2026-08-05 · [6702f46](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6702f464a0a7c06f9e56b5902201af2e2ef5e70e) · Space out challenge header
- 2026-08-05 · [d4a1ff9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d4a1ff96e21ca93dea3def9adb0993b6362fe0a3) · Remove practice distribution helper text
- 2026-08-05 · [95901c0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/95901c0f0a786ac095a54229433a0c4da6831810) · Make signup email optional
- 2026-08-05 · [c3fa695](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c3fa695d444f680fd5edf81644e973a9f187dff3) · Support username-only signup
- 2026-08-05 · [3896533](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3896533c14a98debb6e871a1d8da0d7f6f7bd842) · Add spectator match result mode
- 2026-08-05 · [529ca74](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/529ca742924df547b0f7282044723438d85e354d) · Allow spectators to load public match results
- 2026-08-05 · [63e044c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/63e044cba84d23d7b6e0a1019021c9fecc73de1e) · Report completed spectator matches
- 2026-08-05 · [b48e96e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b48e96e93ed2d49bdba034b8e0e947aeb3ffeb55) · Send spectators to final results
- 2026-08-05 · [4437f3e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4437f3e004d20c82f3ec38a432f21171a17df7a9) · Allow spectator final result access
- 2026-08-05 · [1667197](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/166719720735f7775ab0e49a67e29ac45de0ca53) · Show spectator final results
- 2026-08-05 · [9af288f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9af288f85604d6330eed2dbfb2d5b08c62dfe536) · Add live public room list updates
- 2026-08-05 · [23cbd8c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/23cbd8c0f53571c093b7dae6a2857b173978ec41) · Refresh multiplayer rooms in real time
- 2026-08-05 · [6aab559](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6aab5593406d6f3a1081adfffb92922a30e178a5) · Remove email from account signup
- 2026-08-05 · [b677ae3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b677ae32b9a663132f53ea1ed720084355b4dae3) · Create accounts using username only
- 2026-08-09 · [9bd8e12](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9bd8e1223c3dd82f3aebcedae89eb7bdfd491e5e) · Rename branding to Mathematic Daily in app/layout.tsx
- 2026-08-09 · [f848754](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f848754a95920af9ab289e8bd0c302eb96fd8716) · Rename branding to Mathematic Daily in components/Navbar.tsx
- 2026-08-09 · [f596623](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f596623043d7ede77b1e99b1399d299019a06955) · Rename branding to Mathematic Daily in app/login/page.tsx
- 2026-08-09 · [05edf3d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/05edf3de193d4722d463efd130d880fa021e7891) · Rename branding to Mathematic Daily in app/practice/page.tsx
- 2026-08-09 · [bb59689](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bb596893196976264166210445ebf864bf0a9900) · Rename branding to Mathematic Daily in components/trainer/TrainerSetup.tsx
- 2026-08-09 · [8e757a0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8e757a0572417e510b49dbcfd2af7a8c14380ac8) · Rename branding to Mathematic Daily in components/trainer/TrainerHeader.tsx
- 2026-08-09 · [6352e49](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6352e49c29b60746a206f05d7c4b9ee900434a5f) · Rename branding to Mathematic Daily in components/trainer/TrainerSummary.tsx
- 2026-08-09 · [4d3cdda](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4d3cdda23e957eaaf7a26fbfead06e6657d089b4) · Rename branding to Mathematic Daily in components/trainer/EndSessionDialog.tsx
- 2026-08-09 · [4b05539](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4b0553923878f2fb1ce7084fdbca459f16f13d64) · Rename branding to Mathematic Daily in package.json
- 2026-08-09 · [ef63a21](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ef63a21ebfd43c358ca0b7d2318bb57a89d58a89) · Rename branding to Mathematic Daily in package-lock.json
- 2026-08-09 · [011895e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/011895e1c0f6e8433415c4b6ee08aec6639d4814) · Wrap Alpha question bank filters in Suspense
- 2026-08-09 · [e03d4bf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e03d4bf43621a21ac458de59124a910960b1615a) · Wrap Mu question bank filters in Suspense
- 2026-08-09 · [7e9bbee](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7e9bbee4f9509f00b79f90e177ee03cdcdc34a4a) · Wrap Theta question bank filters in Suspense
- 2026-08-09 · [38dcb5e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/38dcb5ec021bbc0037b8f362ea87f4ef1b475655) · Sync KaTeX dependencies in package lock
- 2026-08-09 · [71cdc1f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/71cdc1f89495f58c6118757676f1a5d21969c210) · Rename branding to Mathematics Daily in app/page.tsx
- 2026-08-09 · [511cbf9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/511cbf93cd255889f31ea8b9f90ed28c4c59d051) · Rename branding to Mathematics Daily in app/layout.tsx
- 2026-08-09 · [5261507](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/52615070347b68d7cf3c127318c370447e818a9f) · Rename branding to Mathematics Daily in components/Navbar.tsx
- 2026-08-09 · [d5e5237](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d5e5237e61d1a493620ee00b01aa110184ca6b48) · Rename branding to Mathematics Daily in app/login/page.tsx
- 2026-08-09 · [6088071](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/60880712c769b667aa4aad5192da49d691be00b8) · Rename branding to Mathematics Daily in package.json
- 2026-08-09 · [a74b99a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a74b99a8beb76d089d5df213e8f8a57e8c2dce9d) · Rename branding to Mathematics Daily in package-lock.json
- 2026-08-09 · [cb145e2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cb145e28187e7c0dadad451df1c63ce917576388) · Link home Play button to multiplayer
- 2026-08-09 · [9f31c49](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9f31c49adf943a595fc2191b2b5f1ffcbf5ff050) · Redesign Mathematics Daily homepage
- 2026-08-09 · [f25b48b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f25b48b4baa39b9035402974912eeda4506dfb83) · Restore simple homepage with larger typography
- 2026-08-09 · [3dd9818](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3dd98184f83e6ea04ff8047ed3be1004fe140ece) · Fix homepage typography and button sizing
- 2026-08-09 · [31f4e9c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/31f4e9cb644a476c3acee176b41781e2d4a67458) · Add supabase/migrations/013_feedback_account_admin.sql
- 2026-08-09 · [5cfcdc9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5cfcdc90596591a82f0fbf120fae36c1e5d923e2) · Add types/feedback.ts
- 2026-08-09 · [b8e9bfb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b8e9bfb067e021ad688d878755c129a7cbd74f30) · Add app/api/feedback/route.ts
- 2026-08-09 · [0d53a20](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0d53a20c3e869ee76afc9f8b67f0bee1ab0fc5c2) · Add components/feedback/FeedbackForm.tsx
- 2026-08-09 · [1a7510c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1a7510c2615669f51ae388355f5d6e678b46a54b) · Add components/feedback/QuestionReportButton.tsx
- 2026-08-09 · [1b76ea9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1b76ea99753e308ce800ea112b0477da0cc183fc) · Add components/dashboard/DashboardQuickActions.tsx
- 2026-08-09 · [8136c98](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8136c9843169d7640cf17ffec621b064215d9cfd) · Add app/suggestions/new/page.tsx
- 2026-08-09 · [2ca5964](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2ca5964269d84a07cd3116e8c2561fb98ee7669e) · Add app/api/account/route.ts
- 2026-08-09 · [fe39e51](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fe39e5182ba68906b4422b796e60ddd5adc2788e) · Add app/account/page.tsx
- 2026-08-09 · [c45c6f5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c45c6f5a006326dd938fcf1ca233fd0f20956af3) · Add components/account/AccountSettings.tsx
- 2026-08-09 · [ebdcc0e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ebdcc0ed06d4d8b067e0b7297831042d9e7792c5) · Add app/api/admin/feedback/route.ts
- 2026-08-09 · [686afa1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/686afa1b58cb5b9c61e3b88b60c1713e6479d678) · Add app/admin/feedback/page.tsx
- 2026-08-09 · [0ed9671](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0ed9671d9d4386fa923309708aead1280c2f301b) · Add components/admin/AdminFeedbackList.tsx
- 2026-08-09 · [8eafd57](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8eafd57e59ad157a5d1fa8da08aa8ee088e61f8e) · Integrate feedback tools in lib/dashboardService.ts
- 2026-08-09 · [61d11de](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/61d11deebe51ef9745d9ee1fbc6b9409429fc40b) · Integrate feedback tools in components/dashboard/DashboardClient.tsx
- 2026-08-09 · [0ae718a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0ae718a44609bb8790d168d4cc7aef0dd2bd1935) · Integrate feedback tools in app/practice/question-bank/\[id\]/QuestionClient.tsx
- 2026-08-09 · [97d9c82](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/97d9c82f2e6ca1d00e2c4eb73823a150ddd127d6) · Integrate feedback tools in components/practice/SolutionPanel.tsx
- 2026-08-09 · [8d2dd3e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8d2dd3ebc7e626c4329a3bc2a8cafcc423c602d2) · Integrate feedback tools in components/trainer/TrainerQuestion.tsx
- 2026-08-09 · [de64913](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/de649137314208e3d455ed52b560299fbb62f034) · Fix app/api/feedback/route.ts
- 2026-08-09 · [4c75c56](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4c75c56d646673258ab5f7d7b2d78de5ed60d705) · Fix components/dashboard/DashboardQuickActions.tsx
- 2026-08-09 · [cba7845](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cba7845d299392d192b100c0235bcdad73b72c02) · Shorten multiplayer intermission to five seconds
- 2026-08-09 · [c8e631d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c8e631d2f5fad057c42da215713ea752ecbf617b) · Shorten multiplayer intermission to five seconds
- 2026-08-09 · [44e946a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/44e946ad7e3baf8b6db7bdd579db154216f4c243) · Fix final multiplayer RP and rank display
- 2026-08-09 · [f422d38](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f422d381063a078d164023b664fd9040e48f6c2e) · Fix final multiplayer RP and rank display
- 2026-08-10 · [56aee94](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/56aee94158f213650bae93abe66fff6d395033d9) · Render math notation in live question choices
- 2026-08-10 · [7e2a024](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7e2a024c65802ac1b9e3314566620734ccaf4e66) · Render math notation in live question choices
- 2026-08-10 · [2d92166](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2d921667c7dfd9fdbfb86382a9d6fa4f81c9eff1) · Render math formatting in multiplayer final review
- 2026-08-10 · [5e8ab45](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5e8ab45dc8307d7b2b71bb374af9981746732db2) · Complete pre-deployment spectator and timer fixes
- 2026-08-10 · [42c4018](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/42c401815f218ba0f0036252299594c276346a6e) · Complete pre-deployment spectator and timer fixes
- 2026-08-10 · [0898f94](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0898f9440e1ac38537cb2f83fa290ef4f66d1905) · Complete pre-deployment spectator and timer fixes
- 2026-08-10 · [3ba9fdc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3ba9fdc427b7daa0e6a5a6db75dbe6fbc37f9483) · Add read-only Supabase pre-deployment audit
- 2026-08-10 · [e086793](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e08679331fb7bf0c617e3e1a7243a470f54782f5) · Fix question reattempt timer build error
- 2026-08-10 · [511e8f4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/511e8f496d7af8c96844c37f801951b9e6dd6eba) · Update dependencies and Mu questions
- 2026-08-10 · [e1dc0d6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e1dc0d6baffff24b84f71cdd9212aca7982fd8e8) · Security hardening: app/api/feedback/route.ts
- 2026-08-10 · [1c94a99](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1c94a99cb0c1d98dd17c26910c79e7d0f228fb15) · Security hardening: components/account/AccountSettings.tsx
- 2026-08-10 · [40f24c3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/40f24c320f9f27cef05c597eb295ebca370436f3) · Security hardening: next.config.ts
- 2026-08-10 · [9bdbdae](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9bdbdae5073b1a5d91717f3c7a879b37687bb043) · Security hardening: app/api/account/route.ts
- 2026-08-10 · [3151cfa](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3151cfa78125d69126b3f6c640744f7b496f90dc) · Security hardening: lib/supabase/admin.ts
- 2026-08-10 · [ac70a09](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ac70a0959e145889094a5b27b5f20ef2bc8e9c62) · Security hardening: app/api/auth/login/route.ts
- 2026-08-10 · [9ac3fd4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9ac3fd4cdbfbb4c94375143be20e0bc7a2ba6d09) · Security hardening: components/math/MathText.tsx
- 2026-08-10 · [af7766a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/af7766a8a16b73f40445c343fd62c17902c883df) · Security hardening: lib/auth/authService.ts
- 2026-08-10 · [882111e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/882111e57982c2b277aacea308448bced4a24304) · Security hardening: lib/services/multiplayerService.ts
- 2026-08-10 · [ca528c8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ca528c8a57cc29f6a82cd6fa4d7b7af4fc888775) · Security hardening: lib/services/challengeService.ts
- 2026-08-10 · [c5a05a7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c5a05a7e56a18a4fa7ac250f978c8791d4c077e9) · Add secure recovery metadata: lib/auth/authService.ts
- 2026-08-10 · [00ed1f9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/00ed1f95885d7f043384ec8820c83039ec172814) · Add secure password recovery: lib/auth/recoveryToken.ts
- 2026-08-10 · [0339162](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0339162e8d885e5d442471e1958ef6ff4f8a6387) · Add secure password recovery: app/auth/confirm/route.ts
- 2026-08-10 · [197b8cb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/197b8cb31a931d1f415dfadecd81b04725cbe599) · Add secure recovery metadata: app/api/account/route.ts
- 2026-08-10 · [4f07b8e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4f07b8e5664b9b60f28ae3e344e2615d63fb5fba) · Add secure password recovery: app/api/auth/reset-password/route.ts
- 2026-08-10 · [17ff162](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/17ff162874f2cdfd63d50c19990ec3370dd568d5) · Add secure password recovery: components/auth/ResetPasswordForm.tsx
- 2026-08-10 · [cfafaa3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cfafaa35742b2f25b02f42f56b95d9d5e03e7979) · Add secure password recovery: app/reset-password/page.tsx
- 2026-08-10 · [cf61114](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cf61114dd61e0f9d33c9d20d3e7e5c2c9a9e63bf) · Add secure password recovery: supabase/migrations/014_auth_display_names.sql
- 2026-08-10 · [263d365](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/263d365763d79d1f9aa296acaf7c43a033d03917) · Support default Supabase recovery: app/reset-password/page.tsx
- 2026-08-10 · [f97930c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f97930c38372f4853f23170d29712d428c29699b) · Support default Supabase recovery: components/auth/ResetPasswordForm.tsx
- 2026-08-10 · [1ce6e33](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1ce6e33c2fef6cafc7553092783b8328da067db8) · Support default Supabase password recovery events
- 2026-08-10 · [ef6cd7c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ef6cd7c62a30012ca2a9328b2dba767726c39c21) · Handle default Supabase recovery URL tokens
- 2026-08-10 · [9583fde](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9583fde63d5085889ab672c881e777ea0668953c) · Add recovery email and assisted account recovery
- 2026-08-10 · [4ec06b1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4ec06b10dcb56f6dd1e0cef306d6569c38a8e993) · Add recovery email and assisted account recovery
- 2026-08-10 · [4c4598d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4c4598deaea495d5799f0df06395a97cf86882b1) · Add recovery email and assisted account recovery
- 2026-08-10 · [a5182d5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a5182d51b6507eb6bb16d857620f7175e7b754a0) · Add recovery email and assisted account recovery
- 2026-08-10 · [c688a84](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c688a84e0c4f88b98ccebe8045c849b1a88764c6) · Add secure admin-assisted password recovery
- 2026-08-10 · [ac4401b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ac4401ba48da7539b11500a59ce35fc7b567a065) · Add secure admin-assisted password recovery
- 2026-08-10 · [54a69af](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/54a69af032052099d8cd5f8d8933fc98e289972a) · Harden assisted account recovery before deployment
- 2026-08-10 · [6eed1dd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6eed1ddc541e2874ce6aa4e9552b2512faefbe9e) · Harden assisted account recovery before deployment
- 2026-08-10 · [833d64b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/833d64bbb82918f09fc30480fb1b6e412c16cf45) · Harden assisted account recovery before deployment
- 2026-08-10 · [be86891](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/be8689117d801f3713bf92d6350ea277a667506b) · Add Mathematics Daily browser branding
- 2026-08-10 · [a46d709](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a46d709ee307b39167c62e5a6b1e8962b465a8f2) · Add Mathematics Daily favicon
- 2026-08-10 · [cea33af](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cea33af69da3f3a075caf99300dcadb02b2f55ae) · Fix mobile navigation layout
- 2026-08-10 · [e8dc582](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e8dc5829d77213fbb17c6409cd657bc264848c73) · Prevent mobile horizontal overflow
- 2026-08-10 · [a53e59d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a53e59d39e87690a08aa9c50410b3bbaa6a09d15) · Add responsive mobile navigation behavior
- 2026-08-10 · [35ce9e8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/35ce9e8bc95c591c866cc263afa589216c3a1274) · Close mobile menu when navigating
- 2026-08-10 · [0905ea3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0905ea300409323b755899b008c987603263a6bf) · Add page navigation transition
- 2026-08-10 · [773a326](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/773a326eb5b97207606c21d46eb9fb9fa8c83b05) · Style route transition
- 2026-08-10 · [6bc8b13](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6bc8b131e91921014f08b311e76b9b623166232e) · Update site sharing description
- 2026-08-10 · [87175a9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/87175a92a2da92403d93b533bebbeedd6644533f) · Show immediate mobile navigation feedback
- 2026-08-10 · [1f18908](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1f18908cf2b2afaca908d1854c6415c486d3bf82) · Add multiplayer loading state
- 2026-08-10 · [9b73a63](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9b73a63fcfffd211c7b0935f35b9b1dbec85f609) · Improve question bank card contrast
- 2026-08-10 · [f6743a1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f6743a1d133d97af0ce4663d4399cfa0fb742cb4) · Fix multiplayer mobile layout
- 2026-08-10 · [2ac82cd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2ac82cd8def0c2f0fc55fb34019562cbf4ab5cbb) · Add multiplayer action loading button
- 2026-08-10 · [b18db0b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b18db0bf83ec208aee04f1bef81b744daa1b7923) · Show room creation progress
- 2026-08-10 · [b3f62b2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b3f62b27ad6f5549361963d9af18e083cd10133c) · Show multiplayer join progress
- 2026-08-10 · [6ca6bce](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6ca6bce60519e44adfbfa122efe7ddec3f8e8959) · Show multiplayer lobby action progress
- 2026-08-10 · [b0b010d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b0b010d46b77cd1aa79fd9ebd37045a8d8e75b52) · Show full-screen multiplayer action loading
- 2026-08-10 · [49fe459](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/49fe4596b960487b5d88053ab2464acc0811d845) · Replace cached favicon assets
- 2026-08-10 · [7d74649](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7d74649c866382007e490c0bb9bf69175b6ae68a) · Use cache-busted favicon metadata
- 2026-08-11 · [6cb7724](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6cb77244f1f1638b261ddb36460d002a7972bfa8) · Increase practice page color contrast
- 2026-08-11 · [ec71918](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ec719184f4221b9aeaab9781f6869c20f1dd9919) · Apply favicon-inspired practice theme
- 2026-08-11 · [c8f5ce8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c8f5ce8980afb37adfdebccf001f06d5118e7a81) · Apply shared theme to Challenge page
- 2026-08-11 · [bcecd6b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bcecd6b96a97ab62a338fb2b36812fcbfc86f39b) · Theme Challenge record card
- 2026-08-11 · [ce30134](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ce30134c28a33cdb36fd4ae87a8f7aa17e609645) · Theme Challenge leaderboard card
- 2026-08-11 · [2cc9c89](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2cc9c8981c1691df1a2f30571beec6adb60d3462) · Strengthen rank-based multiplayer backgrounds
- 2026-08-11 · [5b9d2e4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5b9d2e4a08fa366f06c7a8fea18c0df5c7b9e1f2) · Fix mobile navigation lint error
- 2026-08-11 · [2f45268](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2f452683afa3fdadb893d622b7459fbdc62b7d02) · Apply rank background to dashboard
- 2026-08-11 · [9579fd6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9579fd64ee66a072e44bf6395a8d950a8716df02) · Add animated Mathematics Daily logo
- 2026-08-11 · [28b597a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/28b597ac7c3234496d8226029af431d8a1536901) · Add logo animation and homepage background
- 2026-08-11 · [8870b19](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8870b19c10e4a1d6f8c3374191d07da0158fa9d3) · Show Mathematics Daily logo in navbar
- 2026-08-12 · [ec505f4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ec505f4bef206d0711f0e0c7a557b0270e888068) · Harden login and practice progress
- 2026-08-12 · [f53f346](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f53f346807cc67e452d558d51c0ce9e2d592ef23) · Theme Daily Trainer setup
- 2026-08-12 · [c96d5e4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c96d5e4f4dddc9a2c27b17f89fcfcc26280bdc43) · Theme active Trainer header
- 2026-08-12 · [61d3395](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/61d3395d088dd47cef7117237ae053c236a87299) · Theme active Trainer question card
- 2026-08-12 · [5745280](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/57452802fc5a22c424a6c598ed1d22445b8c1475) · Theme active Trainer sidebar
- 2026-08-12 · [8d1fcf5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8d1fcf5934c1944e15c3e0250b41daa34fa738d2) · Theme active Trainer workspace
- 2026-08-12 · [e77dfd2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e77dfd2dd40086d86b59e22bbe08b23c5f7922c1) · Fix malformed math command in Mu question 34
- 2026-08-12 · [1fc760d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1fc760de3e01fe9f94d39217670fbe413858f29f) · Correct rising continuation dots in Mu question 34
- 2026-08-12 · [e129e07](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e129e07949b132359c1eee4a0c45fc1e3e668951) · Theme individual Question Bank page
- 2026-08-12 · [045c1a5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/045c1a5c3e22ae0bc3493015add62d1df907d1f2) · Theme Question Bank question header
- 2026-08-12 · [0a25507](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0a255072172ded79061619dd97b2c5510a168ce2) · Theme Question Bank statistics card
- 2026-08-12 · [fe300ae](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fe300ae587e83cc41a5495282927a05456cd5fe2) · Complete Question Bank statistics rows
- 2026-08-12 · [96941ff](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/96941ff3833d74e434a5c00772032b34d61fa62b) · Fix Question Bank page wrapper
- 2026-08-12 · [924e21f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/924e21f2590a0ab48dc5b09010fdd8abe8677329) · Polish division question bank themes
- 2026-08-12 · [94918b3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/94918b31a442a5ffd13a48f061c855c6a8e15671) · Match division picker to practice theme
- 2026-08-12 · [cb191fa](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cb191faad2feaaeaf3387f5886c6fb071eb63b1c) · Extend question bank background to viewport
- 2026-08-12 · [033731b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/033731be19d6c84eb05a7ffb24a5b81f02617957) · Add temporary daily challenge question
- 2026-08-12 · [80a8e3a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/80a8e3af6d4a61bd6bad00c4cf17a0506bb6a106) · Fix temporary challenge entry
- 2026-08-12 · [f0c9c5a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f0c9c5a705cb2d8f23a5dc2482057ac5ce9454ea) · Schedule temporary challenge for 2026-08-12
- 2026-08-12 · [b1609c4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b1609c4a9d78fbc56b2f14e80490f34260299add) · Schedule challenge for active UTC date
- 2026-08-12 · [dcaf779](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/dcaf779715281b8fbd6bbaaa338449673c0f46be) · Add trainer history to session summary
- 2026-08-12 · [657c73e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/657c73e3ca83631099f0936451410a0262db93d2) · Build analytical trainer session summary
- 2026-08-12 · [6b0c0f2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6b0c0f2b9191bf0f6afcc474e8db4fecb433b541) · Clean trainer summary history import
- 2026-08-14 · [9747683](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9747683b19eb99c2eb8cfec4d2205c4ad9123a15) · Normalize Mu topic and method labels
- 2026-08-15 · [8f5142a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8f5142a4d3796d4d9ed2c9d59ed88e6f6f924d15) · Add Alpha question bank
- 2026-08-15 · [0691b45](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0691b451b6e03c1ace54a0dc21fd864ca9626e60) · Fix Alpha question LaTeX formatting
- 2026-08-15 · [69b6b50](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/69b6b501fcef828a31c037e1274dbf0683676856) · Match question banners to division colors
- 2026-08-19 · [053cf2e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/053cf2ee7f386e0a6b24435e158cf028b56d928e) · Add new Alpha questions and graph support
- 2026-08-22 · [1f6c93d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1f6c93d3521cbbac18bf4dd840a09ef5f692cafa) · Fix Alpha questions 50 and 51
- 2026-08-22 · [8836f12](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8836f12772b1b31c3be0f952bd65f80e538ac58f) · Clarify disputed Mu questions
- 2026-08-22 · [004a4de](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/004a4de03d15a5bdbfdfce7d820adbbf741c040c) · Add 2023 Mu Individual questions
- 2026-08-22 · [ac8338f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ac8338fa630c9af71544d93c2dc3dbd785528920) · Add 2026 Mu questions and restore original wording
- 2026-08-22 · [bed0852](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bed0852baaa03d830e30616c4e9d1dceeccd6648) · Add owner role and restrict account recovery
- 2026-08-22 · [29f374a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/29f374a2d20fd30092bff2d3bfd27b32be5064dd) · Add owner role and improve practice features
- 2026-08-23 · [3ca0f31](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3ca0f316b2a1eef277d68f79c0acb8bcd2fcf279) · Harden website security
- 2026-08-25 · [23ca865](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/23ca8650489f3b2a1d9687f13a7d751fda7d1a27) · Add 2026 state calculus questions and security updates
- 2026-08-25 · [a1d1e79](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a1d1e792b20ccfdeb03e65d3e675fab2b7877f61) · Add 2026 image
- 2026-08-25 · [50b045f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/50b045fadf8ad6316b57eb8d578640f7b7e1677b) · Add 2026 state calculus questions
- 2026-08-29 · [1ae97bc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1ae97bc32152a806fc51941c0ab58a829f0af79e) · Fix mobile overflow and navbar loading
- 2026-08-29 · [09d64d9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/09d64d9c69fb79c3c8e3348fb8896626bbde0862) · Add Alpha question set
- 2026-08-30 · [d81012d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d81012d9ac154b87d85e0c856338e3d19864e2ef) · Update Mu question classifications and wording

</details>

<details>
<summary>2026-09 · 127 commits</summary>

- 2026-09-01 · [2b310a4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2b310a487828d8455be5976966dc27957fdc0d6a) · Build curriculum-guided AI math tutor
- 2026-09-02 · [3464bbc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3464bbc317e1ab278dbaa07022c2830c85e569ce) · Refine curriculum-guided tutor hints
- 2026-09-02 · [c760896](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c760896bb1b0867e2637f3f91be6cdc68a872c4b) · Polish tutor release experience
- 2026-09-02 · [5039366](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5039366f514f6b9797bb66f762d86196efbfe1d7) · Add responsive llama tutor motion states
- 2026-09-02 · [0d812c8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0d812c8312bcd444b780b957c115272d02f7200b) · Complete tutor states and security hardening
- 2026-09-02 · [24cbeb8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/24cbeb818af678728d2d69d30f081750740c7a67) · Add tutor limits, sleeping state, and security updates
- 2026-09-03 · [3f3e117](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3f3e1174f1482795a725d99ecd411fb2a187dd55) · Improve tutor progression and mobile solutions
- 2026-09-03 · [0f678e4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0f678e4bdb7aa530d490f1da03ed78c952fc7f71) · Improve tutor work-checking responses
- 2026-09-03 · [6b5bd20](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6b5bd2044f425e498e3ea182c8eec5fbfa1e146f) · Make tutor responses follow student progress
- 2026-09-03 · [5902ce9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5902ce95bf19f1f96a972e0619048e88305f50b7) · Add adaptive Daily Trainer progression
- 2026-09-03 · [94e3b80](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/94e3b8027b82c54f97a6168d1fb2aaca9db4f8ea) · Improve multiplayer room presence and countdown
- 2026-09-03 · [c4339be](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c4339be1e35f490ee7d7742e2bc025c05e7ebf81) · Fix multiplayer presence and countdown
- 2026-09-03 · [143b943](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/143b943aa28c695a8158c9d645727a8a5a8a12d3) · Stabilize multiplayer synchronization and prevent duplicate joins
- 2026-09-03 · [53155a2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/53155a2a15f0a5bd5d6befd17991831ac489d883) · Speed up multiplayer question transitions
- 2026-09-03 · [67f7479](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/67f7479a61960dccb1fa114f729982cbc9221469) · Make multiplayer scoring respect answer order
- 2026-09-04 · [b5f5e0a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b5f5e0a908325cc51122e2587b77534096b22ee5) · Add multiplayer realtime foundation
- 2026-09-04 · [8cebe77](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8cebe77db8c31df9392b9f3d71c83badab250918) · Connect multiplayer to realtime updates
- 2026-09-04 · [c5e892d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c5e892d036844ba09f2644380d21ff779075a49d) · Add fair multiplayer question timing
- 2026-09-04 · [34d266b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/34d266b1784dad59062ee2c7280510cc2c1485b8) · Make multiplayer round transitions atomic
- 2026-09-04 · [f5dddff](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f5dddff87543b109f196a3bd51595d4000f5919b) · Fix multiplayer transition timestamp
- 2026-09-04 · [8b9db9a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8b9db9aa8998896ea89636c1b1b49776be543cd0) · Add multiplayer realtime load testing
- 2026-09-04 · [704efb0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/704efb06d5236960026246275ab93c14e7b213fb) · Allow players to rejoin private games
- 2026-09-04 · [8850bf5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8850bf5a3a5f2728b4cf1e80d7892d897e4f211e) · Allow immediate multiplayer answers
- 2026-09-04 · [9600d26](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9600d2623d8f23214508609f76109b3f5db58a35) · Reduce multiplayer request storms
- 2026-09-04 · [d5e1bad](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d5e1bad87fca14bf1d080247960b8417cad5edb0) · Restore multiplayer round transition recovery
- 2026-09-04 · [d0584fe](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d0584feb8ea510f3e68ee39b51abd83d090812c9) · Fix concurrent multiplayer submissions
- 2026-09-04 · [d2413d8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d2413d84ab35cbaab736dfc1d8cde6ab5ab22dc5) · Fix multiplayer state update trigger
- 2026-09-04 · [b6ba52a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b6ba52a340ae29648e31ad8bd6a5e1b72e1d9048) · Speed up multiplayer answer confirmation
- 2026-09-04 · [ce62440](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ce624405b27fe8b37cb06872152bb56ca7d85e5f) · Preload first multiplayer question
- 2026-09-04 · [04bbd12](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/04bbd1213150bef13daa7d22a5dad918886bb9da) · Show leaderboard immediately after submission
- 2026-09-04 · [9338ebf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9338ebfda61351dd1c1bf4778812e24aa86eaba0) · Optimize multiplayer question loading
- 2026-09-04 · [96abc60](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/96abc60a6f895f1ab24633f7861aedc6cf288489) · Preload multiplayer questions during intermission
- 2026-09-04 · [3f1b73f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3f1b73fc40e05c5e80604f9ec26c576840777d87) · Confirm preloaded round before reveal
- 2026-09-04 · [0480ce1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0480ce1db69c210f8eef0c63f0843619f6ff69c1) · Reveal preloaded rounds atomically
- 2026-09-04 · [b45c28e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b45c28e8583a7b6e62ed0d0ad871358040544eb1) · Prepare multiplayer rounds for every player
- 2026-09-04 · [ed0dfb3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ed0dfb308b2723d1d56d950b8ec687ee4dd26a5c) · Enable multiplayer answers immediately
- 2026-09-04 · [b697016](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b697016de2cf91be2a10edde7f9fa8d151665e0f) · Clear stale multiplayer submission state
- 2026-09-04 · [396a7dd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/396a7dd45d81a0c1bf26da06ee066e66ebf846fc) · Reveal preloaded multiplayer questions locally
- 2026-09-04 · [782b2cf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/782b2cfd042488a719085df100b34c2eb5fe0031) · Restore multiplayer intermission countdown
- 2026-09-05 · [967dd6e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/967dd6ee3a084ffd17d415dba552013b653c93ab) · Make multiplayer answer submission atomic and retryable
- 2026-09-05 · [75c8d76](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/75c8d76b911a63bcb527dabf8e48e7014e473281) · Unify multiplayer question timing and use ten-second countdown
- 2026-09-05 · [8b07d12](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8b07d12ba782caedf766e030e147084579e52069) · Complete multiplayer state recovery and database progression
- 2026-09-06 · [1354f63](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1354f6309730bbc935914f643b68dafdaf27650b) · Add multiplayer readiness countdowns and fix Alpha numbering
- 2026-09-06 · [f5c7877](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f5c7877f44f49d3b07fa4078fa89526dd2abf509) · Treat ordinary tutor help requests as hints
- 2026-09-06 · [6604891](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/66048912eddcf4403aea61637915e713cd827247) · Make tutor calculator-free and support question metadata
- 2026-09-06 · [c9f56f8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c9f56f8f13e3508b9186000cbd24c566b2f7293d) · Improve tutor boundaries and misconception feedback
- 2026-09-06 · [27951bd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/27951bd8e8e749a8869353465ee14b1b81d7aca7) · Add thirty reviewed Alpha questions
- 2026-09-06 · [fc99d52](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fc99d52051eb57973bb98649e2a87bdee86c0410) · Add Alpha questions 119 through 147
- 2026-09-06 · [0cdb16a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0cdb16af9eb2930de7c69e474f8dd7aa891edeef) · Add math-themed homepage entrance while preserving logo animation
- 2026-09-06 · [3ce9da4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/3ce9da466920241dba387cd7ac501da52d997b47) · Polish multiplayer lobby and use blue occupied-room styling
- 2026-09-06 · [e30afc0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e30afc0669d62780a6efe31aa93d91e9ea1f7921) · Uppercase Alpha and Mu room symbols
- 2026-09-06 · [407a6e1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/407a6e180b5cd89da5d0fe71787265f4c0edcf8b) · Order public rooms Mu Alpha Theta
- 2026-09-06 · [8ccdb6b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8ccdb6b0a9d036b8d38ecd38f0789262adfc7cf4) · Polish private room creation page
- 2026-09-06 · [68665f6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/68665f606fe64cc73befde2334e2c98527c2d449) · Add multiplayer podium spotlight celebration
- 2026-09-06 · [42d3447](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/42d344781d9adb56eb7c35abb2efe8a5472f3234) · Polish multiplayer screens and add question error reports
- 2026-09-06 · [460f9ca](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/460f9ca31d6bdf5c512bf858fdb7fccc8e71a45a) · Hide question ID from report form
- 2026-09-06 · [d064e3b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d064e3b65efa85bc82082595930907c1c45f4f54) · Rebalance multiplayer RP and fix rating history
- 2026-09-07 · [2f55a78](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2f55a7887df200cd9ed06835edd420cec933ae15) · Hide stale players from public room cards
- 2026-09-07 · [8f79a42](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8f79a42601bec6e0a246438131ddaac5ff73272c) · Add daily challenge divisions with shared streak credit
- 2026-09-07 · [a728263](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a72826300b3d3c27d313e514d8a5881184222eee) · Guard missing daily challenge question lookup
- 2026-09-07 · [bde88fe](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bde88fe94ce5fe8394e940d4ef173e486231f420) · Add secure admin users directory and statistics
- 2026-09-07 · [889af78](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/889af78e00989e6ba1fa6ed037ea5e71fadf07b1) · Polish account suggestion and admin pages
- 2026-09-07 · [083b7c6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/083b7c6d9d5ae081ce8b67916debaf43aec64259) · Polish dashboard styling
- 2026-09-07 · [02dc0f6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/02dc0f677dac0464137a682e38fde40f67196d5f) · Polish practice landing page
- 2026-09-07 · [1c9b038](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1c9b03880370e0db1f1cf2ac6dc22c765f059ff2) · Polish challenge page styling
- 2026-09-07 · [a653486](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a653486fd27881d4e07225f33aeecac361c958fe) · Polish sign-in and sign-up screens
- 2026-09-07 · [78b0359](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/78b03592a03131ed089cd5ee288c7f5b8fd2bb07) · Add legal policies and signup consent
- 2026-09-07 · [700c15e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/700c15ed816cdb7ca4e4887a97533cc6ed5b4398) · Add privacy policies and legal protections
- 2026-09-07 · [6a096d7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6a096d7c02731d177018c23bb4134397ed91de7f) · Refine legal terms and contact page
- 2026-09-07 · [57ad01d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/57ad01d9b569a588354fdbeddafdecbf39363318) · Add privacy-filtered Vercel Web Analytics
- 2026-09-12 · [bef0dce](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bef0dceb9916c89717fe9da2e192789d09df5103) · Harden practice, tutor accounting, feedback and account recovery
- 2026-09-12 · [6963289](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/69632899380379fe4f7151a4d55f4a550e2b1c8d) · Clarify ownership of permitted content
- 2026-09-12 · [75d05df](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/75d05dfc6977bf5516e27833c9782c13be2ef3ea) · Add Mu Alpha Theta credit
- 2026-09-13 · [192e6d8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/192e6d83244a29a70e260678bf4bab80cedb40aa) · Approve unrs-resolver install script for pinned version
- 2026-09-13 · [9c4dd04](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9c4dd0406e85b48cd980cb2344544cbefdbd7cae) · Add MU questions 177 through 206
- 2026-09-14 · [ea0b4e6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ea0b4e6f47cc780d4f866d8708862112b5ed45bd) · Add 2024 State MU test with original solutions and diagrams
- 2026-09-14 · [d2528e9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d2528e96b1cdb77d34551248f5ee82af011f8dfe) · Standardize Mu power series methods
- 2026-09-14 · [0e7445f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0e7445f3eae81e62e3ca62ddea8bf3eb65655f03) · Simplify Mu question method labels
- 2026-09-14 · [8315bb4](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8315bb4698da458339d76d0c4da13cbaced65862) · Make MU question 206 self-contained
- 2026-09-14 · [01da3fd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/01da3fda7a1f26fd99583d9c338794f49d3469c2) · Merge updated MU question metadata
- 2026-09-14 · [a43e14b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a43e14ba22a66c2a269ffb3679ff60a6ef92d86f) · Add January Statewide Mu calculus test
- 2026-09-14 · [d397fbf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d397fbfa65258520a41e4c0439eee5a8df8ded3f) · Remove editorial commentary from Mu solutions
- 2026-09-14 · [43cb1f7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/43cb1f787a6f65828c7c6ab7349d8a61a58b3241) · Add solution diagrams for MU questions 217 and 227
- 2026-09-14 · [a01b987](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a01b987eff70ab889a5a6ef64ff3e61adcaa9caa) · Refine MU solution diagrams
- 2026-09-14 · [b8d0b57](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b8d0b577d34e2f781598c013b98084d83671c42e) · Align MU 227 graph intersections
- 2026-09-15 · [d9b5199](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d9b51995ced9fefada4303f0ae7a63ababbd4d1f) · Add 2026 January Regional Mu questions
- 2026-09-15 · [abf28de](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/abf28de3544e231d33dbff54c488ba20d1981dc5) · Update Mu question bank
- 2026-09-15 · [8367dac](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8367dac40a6442a5b297ebbe7a62177915f53380) · Standardize question bank labels
- 2026-09-15 · [c033dcf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c033dcf7294db91a53d2c34031dd8fd3d6dabf71) · Standardize all question bank labels
- 2026-09-16 · [abdd8e3](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/abdd8e35ebea0a4bf4d0afc7fb9b430f78a170f7) · Add 2026 February Regional Mu questions
- 2026-09-19 · [d08cf38](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d08cf38ed8fb67ed1bb6cc41ff755d9488520207) · Add 2026 King February Statewide Mu questions
- 2026-09-19 · [db40f8c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/db40f8caaf9646781d6445e193a57753e4d42123) · Improve tutor visual descriptions without revealing answers
- 2026-09-19 · [2b87a63](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2b87a63eeb1bc5829ad11d809a2d41ecc69dda8c) · Add 2025 Chiles Statewide Theta questions
- 2026-09-19 · [d89707e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d89707e50318591ded93e0407c5956f5463258c5) · Improve Theta question diagrams
- 2026-09-19 · [1bba649](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1bba649324309b61ff952883cdd8c8550c3fce37) · Add January Statewide Algebra 2 Theta questions
- 2026-09-19 · [2f86176](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2f86176b511b57e2f1b458b1e9a3a7948c0df1b8) · Add February Regional 2026 Theta test
- 2026-09-19 · [d0aa8f0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d0aa8f042c2f40f78adf69846d9e683be09e6771) · Add King Statewide 2026 Theta test
- 2026-09-19 · [ff32bab](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ff32babec271f3d63271c6e14d6b18716cd7dc82) · Add March Regional 2026 Theta test
- 2026-09-19 · [54800da](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/54800da3c958dfd864c0d376fb16cb4de1a5ccd9) · Add NSU March Statewide 2026 Theta test
- 2026-09-20 · [7809b56](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7809b5662966e831e685f4d2c301cd43aa1ebc83) · Add FAMAT State Convention 2026 Theta test
- 2026-09-20 · [5f1b978](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5f1b9785157a6d498225b2eebbfa3ba7c0c91d97) · Refine Theta question diagrams
- 2026-09-20 · [c05c192](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c05c1928dd30e71cc96988c6085e45d2dd7c9b90) · Add interactive pixel llama tutor mascot
- 2026-09-21 · [edc3d3b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/edc3d3b63ea9aa8a05664daa7ed4a89f0895c01c) · Add and verify three Alpha question sets
- 2026-09-21 · [c4edfd5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/c4edfd5695e6642b094afece308f49bda73e1436) · Add 2025 FAMAT Theta question set
- 2026-09-21 · [d1a6dde](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d1a6dde074382b141f78306df93745b77e2e794f) · Add 2024 FAMAT Theta question set
- 2026-09-21 · [56f9ed9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/56f9ed952d7b1f03c74084cd2e93eebf6ed79ac1) · Add 2023 FAMAT Theta question set
- 2026-09-21 · [1ad9b53](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1ad9b532137ad1df40c3922b5e85444bf07bc9e9) · Add 2022 FAMAT Theta question set
- 2026-09-22 · [602ad05](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/602ad058a81a6184e826e7a547316b949200c42c) · Add 2021 FAMAT Theta question set
- 2026-09-22 · [f2a8afb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f2a8afb833c03676d17ad6d0b71bd8884c7df329) · Add 2025 MAO National Theta question set
- 2026-09-22 · [740c9f7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/740c9f7b6c45780ded11470a840035e10e3bf973) · Add 2024 MAO National Theta question set
- 2026-09-22 · [fcc6608](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fcc660845ff3f1887a388997a17e01ea736da1d8) · Simplify practice page design
- 2026-09-22 · [0312eee](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/0312eeef806b5729ec2e92b450b486b3191aad0e) · Improve navbar visibility
- 2026-09-22 · [dc6a909](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/dc6a909e8b23a8e80b9ad3fd5c8194ee6741b3bf) · Fix multiplayer tab reconnects
- 2026-09-22 · [5474bff](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5474bff4ce594be216e1e63bef66ce77eef57382) · Add five days of Daily Challenge questions
- 2026-09-22 · [1b0aee1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1b0aee1b79d283c1a7fb8e0fa1dba75ce4306947) · Keep Llama Tutor above navbar
- 2026-09-22 · [658d846](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/658d846b9dd8fbfa9255a5f703353cc3e8f89488) · Improve Daily Challenge questions
- 2026-09-22 · [f0375de](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f0375ded4e5a9248fd56742cef20ac79630ba75b) · Fix Daily Challenge math formatting
- 2026-09-22 · [be6c31c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/be6c31ca30400627ade9cb8ce2f6ed71fbc52fcc) · Add 2026 FAMAT Alpha question set
- 2026-09-23 · [ff31a13](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ff31a131673c122d9936739cb47ac0f8d7a90f84) · Standardize Alpha question labels
- 2026-09-23 · [630709e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/630709e8a2c9ee0907b4fed0875b6bfb1c06268d) · Limit multiplayer rooms and retain match history
- 2026-09-23 · [55182df](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/55182df43f744f60f6bf3da40d780cbe42a079b8) · Fix multiplayer load test answer selector
- 2026-09-24 · [db57384](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/db57384633eaa6ad77ad5cd92890ae4f479f66ad) · Delay multiplayer result receipt until reveal completes
- 2026-09-24 · [85bc7bc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/85bc7bc41bd955a076444b8c00cdbb127fd6c473) · Reduce multiplayer results loading contention
- 2026-09-30 · [20f1da2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/20f1da2fea70cd71ade21303c08a379eca698e7a) · Fix LaTeX formatting across question catalog
- 2026-09-30 · [ccd8f91](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ccd8f91d0fa1797f51965d545fba3fca6b5310a7) · Improve practice loading and multiplayer lobby reliability
- 2026-09-30 · [121baee](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/121baee9c56082256d24efa45de32697f15811de) · Speed up Question Bank browsing and navigation
- 2026-09-30 · [e95f372](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e95f372a6f699680110be00d4c3c326fffdefccb) · Match Practice page to website theme

</details>

<details>
<summary>2026-10 · 80 commits</summary>

- 2026-10-01 · [80eaab0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/80eaab0789026975c31c9d6afa95e5dd4404beff) · Speed up Daily Trainer loading and question selection
- 2026-10-01 · [9888135](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/98881351287489d85cfa8578e8d8d4e033949810) · Improve Llama Tutor retries and loading recovery
- 2026-10-01 · [ce78e53](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ce78e53f120d02cb6c620953a93cbf23ffe953db) · Speed up dashboard summaries and improve loading recovery
- 2026-10-01 · [771f821](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/771f8212b8bd53e6ef6bf499d2b2edcc00686025) · Allow tutor website questions and preserve chat across tabs
- 2026-10-01 · [9549ffc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9549ffc3acfebc30afedc24051d7a44c37bf6095) · Make Trainer session saves atomic and retry-safe
- 2026-10-01 · [7ad104d](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7ad104da63087187bdef4d69eca4d88034cbeb71) · Restrict tutor to math and basic website questions
- 2026-10-02 · [2ca573e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2ca573e04d2f07de89c7848eebebe52efc13581d) · Improve question loading and bookmark reliability
- 2026-10-02 · [50c0dce](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/50c0dce2e3838f01f13a3e2d7bf8876197fe4754) · Add bounded API performance diagnostics
- 2026-10-02 · [24b5ee6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/24b5ee6bd1818626782aedcf87baa7935d65ce37) · Restore active Trainer sessions after refresh
- 2026-10-03 · [84d18e2](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/84d18e28882c0cef3cb2ec4ba653fe10e0ffe8c5) · Add Google sign-in and public name filtering
- 2026-10-03 · [2bf1af8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2bf1af8c253b76fbbc6f9d2ae7fe123c93c2d3e6) · Restrict signup and role function permissions
- 2026-10-03 · [5107a06](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5107a0677ac4d6fd7ff61061234ad251f2b902db) · Fix dashboard navigation after Google account setup
- 2026-10-03 · [743bd59](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/743bd595ade1e5ff721b31721dcf8608d1cfcbba) · Add multiplayer hosts difficulty and room timers
- 2026-10-03 · [9acbab0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9acbab0d946fb856ddc835ae9a362c03d6672cec) · Resolve multiplayer migration version collision
- 2026-10-03 · [be7f13a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/be7f13a82804af9a00fdbb08a56439a86b87c63c) · Add public multiplayer lobby ready controls
- 2026-10-03 · [e9c6929](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e9c6929615dbe0fa1b675875fc021465a94ace46) · Add multiplayer scoring and Give up
- 2026-10-03 · [81334db](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/81334dbcd535e3e5cf10160b423a7a036cd95cd1) · Add multiplayer round feedback and waiting countdown
- 2026-10-04 · [ecde579](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ecde5799b207d9a4082fdb28edf1048cdf746149) · Fix private lobby recovery and unused public room scoring
- 2026-10-04 · [2dfe28e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2dfe28e1a14fe930a54daa96fd0cce894940436f) · Speed up multiplayer start and results loading
- 2026-10-04 · [2e878ff](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2e878fff322ee106ab8360389aa5f7a80f1a584e) · Clean up multiplayer text and answer status
- 2026-10-04 · [dd8cb18](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/dd8cb18d15c3f2311e2b0ddb3c379b9b2dcbd72b) · Allow unlimited multiplayer creation for admins and owners
- 2026-10-04 · [b489711](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b489711e907c5bd0b1aee455f9a1be3eefd89e96) · Remove unused files and reuse static question lookups
- 2026-10-04 · [fffca82](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fffca82f8ef3991577d5ff85608ced5f88e8062a) · Harden signup identity and browser security
- 2026-10-05 · [9136d49](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9136d49f4d74f79015013384960f8348426831e3) · Add official Google icon and sign-in button styling
- 2026-10-05 · [e44f8af](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e44f8af06ec8421ae05ac6410dce81b8567c5073) · Remove extra multiplayer messages
- 2026-10-05 · [605dc4a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/605dc4af7648701fff909904fcb417369a603a54) · Add protected forgot-password recovery
- 2026-10-05 · [db576a5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/db576a51584254604510097a3631e6c189c63811) · Fix multiplayer question images and live submission updates
- 2026-10-06 · [201e189](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/201e1896f5edaba99fa06a9c37b9ba338cc4985e) · Fix Question Bank saved-state loading delays
- 2026-10-06 · [4f70e54](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4f70e545cde09b52331fd1b14d3038bb9cbda825) · Add secure account moderation and required username changes
- 2026-10-06 · [1d8903e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1d8903e9f77fe53ad35f96d778392640d89dbaab) · Remove typed moderation confirmation, retain verification
- 2026-10-06 · [dc20e0f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/dc20e0fedeed475314a6a2ad7d1aeb1e5924df7a) · Update division chooser design and animations
- 2026-10-06 · [ae18606](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ae18606c19c982acc302876fd82aba180ea2221a) · Polish division question bank design
- 2026-10-06 · [eff6b82](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/eff6b82a1346fb2d83fad7a6b272a30f79a2b0e5) · Polish question page design
- 2026-10-06 · [90017b9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/90017b9b5812b95f7cd956a69a926efbde81e110) · Redesign trainer setup with division animations
- 2026-10-06 · [6f064e6](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6f064e6ee80d78778101868cf7634d97c50ffd23) · Improve question bank layouts on wide screens
- 2026-10-06 · [93d0fcb](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/93d0fcb2aeb0700df1c3cc82a18b4dbd99067ee8) · Use full-width question bank with compact filter sidebar
- 2026-10-06 · [99d063c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/99d063c7fec0801eed143adadd895f20447c5686) · Improve fullscreen problem layout with compact statistics
- 2026-10-07 · [215394c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/215394cbc8ef875437a66a07289dc2e1b8e833c6) · Refresh daily trainer session design and fullscreen layout
- 2026-10-07 · [eb3508f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/eb3508ffcf88ec885b01d165842b7ce4007489c5) · Polish trainer end-session confirmation dialog
- 2026-10-07 · [953fb1c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/953fb1c7b68ee797dbd44c473b1bc9f5ed1d27f1) · Refresh daily trainer summary design
- 2026-10-07 · [7ae9c40](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7ae9c402c6af781e672cbbff41a4700d20015c19) · Redesign daily challenge with horizontal Streak Studio
- 2026-10-07 · [2ec8001](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2ec80015018cf68b27ef42b17b7279b89203f169) · Redesign multiplayer lobby with division-colored rooms
- 2026-10-07 · [1ab896b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1ab896ba2ffa25c317a74dec3fce9b708f76d6f5) · Add public room scoring explanation and RP help tooltip
- 2026-10-07 · [9d0c4d8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/9d0c4d8056aa6314b4788b341abd63f7137c4570) · Redesign dashboard with chapter bands
- 2026-10-07 · [710ff22](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/710ff22681d0d766c69f9a4356385e15583630c8) · Add 13-plus guest join flow and underage reporting procedures
- 2026-10-07 · [e9a962e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e9a962ec90a3268d2fb9ca05c6f10f986d32959c) · Hide guest age notice for signed-in users
- 2026-10-08 · [f9d69ae](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f9d69aeba4f9258b7256969abe9ff5dd66fb0939) · Add math tutor notice and fixed safety referrals
- 2026-10-08 · [4c4390c](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4c4390cfcdc3d6daf07760ff20d42d99fe5fab90) · Fix tutor LaTeX formatting and simplify homepage copy
- 2026-10-09 · [fc3ed90](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fc3ed90c544e0944e5a0fd7a140186dc8a85809a) · Add secure moderation data retention
- 2026-10-11 · [cdc1794](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cdc179431e6ee33c1b48ef2396bfb6907dfaabda) · Add selectable Daily Trainer starting difficulty
- 2026-10-11 · [4479df5](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4479df574b6340f66d06c5b11d7e147e7b2814c0) · Match password reset page to website theme
- 2026-10-11 · [2693427](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/269342710ed8c8bb203146506c3be30837caf239) · Show account feedback in each settings section
- 2026-10-11 · [5ac5ebc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/5ac5ebce910283f0a66c73848209ae3647da5b9c) · Add Return to Lobby buttons after multiplayer matches
- 2026-10-11 · [f1f8f9f](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f1f8f9f57e3650eb65dc25a5aec68e480e2ab982) · Update multiplayer scoring to 750 base and fixed 300 penalty
- 2026-10-12 · [eba0084](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/eba00843406b20f276caf173878b2940d2666db3) · Patch KaTeX and source-map-js security vulnerabilities
- 2026-10-17 · [43f7b95](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/43f7b95acbeac31ed4316c371c9831b464830c55) · Restore King calculus test and add question source credits
- 2026-10-18 · [b1002cd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b1002cd2ffdd3f4a3c8d582598024ca62c0d504f) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [e9c3e6b](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/e9c3e6b33303f8b7f83aa80355ab874bfecf1dbd) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [7342b49](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7342b4984a4739578566a8a9ae52b0487540ccba) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [af7f9a9](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/af7f9a9998706f133c178448bded0460bce3d4bf) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [bd6d9ad](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/bd6d9ad8c1d251fbffa3dfeb9ebb9ff7441132d9) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [ae92092](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/ae920927b01ecc002058b34f60f6948dcf2e8082) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [fee367e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/fee367e2ec13c5077d1f7e140e96ef115b0755b6) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [9871200](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/98712003be997cb530b157973b2372c192fbd666) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [8a32480](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/8a32480482e249df4347524404ee04f5adb12633) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [1ba8565](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1ba8565eeee6d5c7df7786faee0525cbf8f860d4) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [b20d9f8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b20d9f8fddd4918b71be06d93a6fcff6e2c08907) · Update Mu question bank, source reviews, and national publication hold
- 2026-10-18 · [10c15c1](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/10c15c10cc582557f1ba35a20763b6a9e667b2cb) · Update reviewed question banks, source credits, and publication holds
- 2026-10-19 · [f3934dd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f3934dd4fea5650f8f1a2f8df4e67055f39381c9) · Update reviewed question banks, source credits, and publication holds
- 2026-10-19 · [b65e39a](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/b65e39a52539d0e476ff9527b1d6531c5a709ed6) · Add daily challenge question-bank fallback
- 2026-10-19 · [7aa90e7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/7aa90e76292281f9e1da433cb407c157c00421ac) · Show completed days in daily challenge calendar
- 2026-10-19 · [75a9387](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/75a9387095e4e6a933c5f09d26cff99523fd64c0) · Fix private room join form spacing
- 2026-10-19 · [cff2e60](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cff2e600c3a38a44195c37e6ed388709438d5d83) · Optimize Trainer timer rendering and repair browser tests
- 2026-10-19 · [1cb7687](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/1cb7687a84fbf7fc8167490654f45b0f63941175) · Update reviewed question banks, source credits, and publication holds
- 2026-10-21 · [4f3ccbf](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/4f3ccbf4e1b04ee941600fd1965ee2fe18b4decb) · Add daily challenge problem submissions
- 2026-10-21 · [d6aaeea](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/d6aaeeafc536f03e39cbe834088a970234568562) · Update Credits layout, endorsements, and logo
- 2026-10-21 · [cdb1a14](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/cdb1a14bfb1acf6cf0a5f7690e19c018166c19c4) · Use New York time for daily challenges
- 2026-10-25 · [2d487f7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/2d487f7e9e50a6530a058752ad5f34c0360ae019) · Show question metadata on hover
- 2026-10-25 · [a2892b7](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/a2892b7435530a533f3322a243be9b588437b67e) · Hide question tooltip when mouse leaves number box
- 2026-10-29 · [6da3dcd](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/6da3dcd149101684ef75c3ac8230e3f9727ff109) · Polish page layouts and visual consistency

</details>

<details>
<summary>2026-11 · 6 commits</summary>

- 2026-11-01 · [83250e8](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/83250e88fd5410dba3a0228c2d67468a947dea21) · Document Mathematics Daily overview, architecture, history, and setup
- 2026-11-09 · [23d1a58](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/23d1a581520d9c15a03bf5297c0b147880b84672) · Update reviewed question banks, source credits, and publication holds
- 2026-11-17 · [f4ee5a0](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/f4ee5a0920acce791a5d0b37042340814665325b) · Add five reviewed 2025 Precalculus Individual papers
- 2026-11-22 · [078b6bc](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/078b6bcf0bfba96bcbe246d31f8c007b796edadb) · Add five reviewed 2023 Calculus Individual papers
- 2026-11-23 · [17ea877](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/17ea877ffedb0b9b0c24cf29a0562526f99f7cf9) · Clarify username format validation message
- 2026-11-23 · [041053e](https://github.com/vn9ttrkd54-ui/mathematics-daily/commit/041053e39e72a6d09efbbfa96f0fd48dd5bbc964) · Clarify repository release and display Eastern time

</details>
