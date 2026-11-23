import type { Question } from "@/types/question";

export const muMarchStatewide2023Questions: Question[] = [
  {
    id: 10802, number: 679, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 1 },
    topic: "Derivatives", difficulty: 1, methods: [],
    question: String.raw`If \(f(x) = 2e^{x} + 2\), what is the value of \(f^{''}(1)\)?`,
    choices: [String.raw`\(2e^{x} + C\)`, String.raw`\(8e^{x} + 2\)`, String.raw`\(2e + 2\)`, String.raw`\(2e\)`, "NOTA"], answer: "D",
    solution: String.raw`\(f(x) = 2e^{x} + 2.\)

    \[f'(x) = 2e^{x}\ \Rightarrow \ f^{''}(x) = 2e^{x}.\]

    \[f^{''}(1) = 2e^{1} = 2e.\]`,
  },
  {
    id: 10803, number: 680, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 2 },
    topic: "Limits", difficulty: 1, methods: [],
    question: String.raw`Evaluate: \[\lim_{x \rightarrow - \infty}\frac{x^{6} + 5x^{5} + 4x^{4} + 3x^{3} + 2x^{2} + x + 1}{6x^{6} + 5x^{5} + 4x^{4} + 3x^{3} + 2x^{7} + x + 1}\]`,
    choices: [String.raw`\(- \frac{1}{6}\)`, String.raw`\(\frac{1}{6}\)`, String.raw`\(0\)`, "DNE", "NOTA"], answer: "C",
    solution: String.raw`There is an \(x^7\) term in the denominator, which makes the limit go to 0. The ratio of leading terms is \(x^6/(2x^7)=1/(2x)\), which tends to zero as \(x\to-\infty\).`,
  },
  {
    id: 10804, number: 681, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 3 },
    topic: "Definite Integrals", difficulty: 2, methods: [],
    question: String.raw`Evaluate: \[\int_{0}^{3}{\left( x^{4} - 4x^{3} + 7x^{2} - 6x + 2 \right)\ dx}\]`,
    choices: [String.raw`\(\frac{46}{5}\)`, String.raw`\(\frac{64}{3}\)`, String.raw`\(\frac{48}{5}\)`, String.raw`\(\frac{64}{15}\)`, "NOTA"], answer: "C",
    solution: String.raw`The expression looks like the expansion of

    \[{(x - 1)}^{4} = x^{4} - 4x^{3} + 6x^{2} - 4x + 1.\]

    Once we subtract that out of the integrand, we are left with \(x^{2} - 2x + 1\), which is \((x - 1)^{2}.\)

    The integral then becomes

    \[\int_{0}^{3}{{(x - 1)}^{4} + {(x - 1)}^{2}\ dx} = \left. \ \frac{{(x - 1)}^{5}}{5} + \frac{{(x - 1)}^{3}}{3} \right|_{0}^{3} = \frac{33}{5} + \frac{9}{3} = \frac{48}{5}.\]`,
  },
  {
    id: 10805, number: 682, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 4 },
    topic: "Implicit Differentiation", difficulty: 3, methods: [],
    question: String.raw`Find the slope of the line normal to the curve \(x^{3}y + \ln(x)\ln(y) - x^{2}y^{2} = 1\) at \((e,\ e).\)`,
    choices: [String.raw`\(\frac{e^{4} + 1}{e^{4} - 1}\)`, String.raw`\(\frac{e^{4} - 1}{e^{4} + 1}\)`, String.raw`\(- \frac{e^{4} + 1}{e^{4} - 1}\)`, String.raw`\(- \frac{e^{4} - 1}{e^{4} + 1}\)`, "NOTA"], answer: "D",
    solution: String.raw`Taking the implicit derivative gives

    \[3x^{2}y + x^{3}y' + \frac{\ln(y)}{x} + \frac{\ln(x)}{y}y' - 2xy^{2} - 2x^{2}yy' = 0\]

    \[3e^{3} + e^{3}y' + \frac{1}{e} + \frac{y'}{e} - 2e^{3} - 2e^{3}y' = 0\]

    \[y' = \frac{e^{4} + 1}{e^{4} - 1} \rightarrow - \frac{1}{y'} = - \frac{e^{4} - 1}{e^{4} + 1}\]`,
  },
  {
    id: 10806, number: 683, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 5 },
    topic: "Improper Integrals", difficulty: 4, methods: [],
    question: String.raw`Evaluate as an ordinary improper integral: \[\int_{- 5}^{5}{(x^{3}\tan\left( x^{2} \right) + 1)\sqrt{25 - x^{2}}}dx.\]`,
    choices: [String.raw`\(\frac{25\pi}{4}\)`, String.raw`\(25\)`, String.raw`\(\frac{64}{3}\)`, String.raw`\(\frac{64\pi}{3}\)`, "NOTA"], answer: "E",
    solution: String.raw`The odd part of the integrand has interior singularities. In particular \(a=\sqrt{\pi/2}\) lies between 0 and 5, and \(\tan(x^2)\) has a simple pole there. The factor \(x^3\sqrt{25-x^2}\) is nonzero at \(a\), so the one-sided integral diverges logarithmically. The ordinary improper integral does not exist, giving NOTA. Canceling across opposite poles would be a principal-value calculation.`,
  },
  {
    id: 10807, number: 684, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 6 },
    topic: "Limits", difficulty: 1, methods: ["Rationalization"],
    question: String.raw`Evaluate: \(\lim_{x \rightarrow 9}\frac{18 - 2x}{3 - \sqrt{x}}\)`,
    choices: ["0", "12", "6", "DNE", "NOTA"], answer: "B",
    solution: String.raw`\[\lim_{x \rightarrow 9}\frac{18 - 2x}{3 - \sqrt{x}} = \ \lim_{x \rightarrow 9}\frac{(18 - 2x)(3 + \sqrt{x})}{(3 - \sqrt{x})(3 + \sqrt{x})} = \lim_{x \rightarrow 9}\frac{(18 - 2x)(3 + \sqrt{x})}{9 - x} = \ \lim_{x \rightarrow 9}{2\left( 3 + \sqrt{x} \right) = 12.}\]`,
  },
  {
    id: 10808, number: 685, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 7 },
    topic: "Series", difficulty: 4, methods: ["Ratio Test"],
    question: String.raw`Which of the following series diverge? \(I.\sum_{n = 2}^{\infty}\frac{1}{n{(\ln(n))}^{2}}\).  \[II.\sum_{n = 0}^{\infty}\frac{n\sqrt{n} + 2\sqrt{n} + 1}{3n^{3} + 9n^{2} + 9n + 4}\].  \(III.\sum_{n = 1}^{\infty}\frac{n!}{100000000^{n}}\)`,
    choices: ["II and III", "III", "I and II", "I and III", "NOTA"], answer: "B",
    solution: String.raw`Series I converges by the integral test: substituting \(u=\ln x\) gives \[\int_2^\infty dx/[x(\ln x)^2]=\int_{\ln2}^\infty u^{-2}\,du=1/\ln2\]. In II the leading terms are \(n^{3/2}\) and \(3n^3\). Limit comparison with \(n^{-3/2}\) gives ratio \(1/3\), so II converges. For III the ratio of consecutive terms is \((n+1)/100000000\), which tends to infinity. Its terms do not approach zero. Hence only series III diverges.`,
  },
  {
    id: 10809, number: 686, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 8 },
    topic: "Linear Approximation", difficulty: 2, methods: [],
    question: String.raw`Isaac is using Newton’s method to approximate the zero of \(f(x) = x^{3} - 3x\), and he uses \(x_{0}\) as his initial guess. To Isaac’s surprise, the next guess he obtains, \(x_{1}\), is undefined. What is a possible value of \(x_{0}\)?`,
    choices: ["1", "0", String.raw`\(\sqrt{3}\)`, "e", "NOTA"], answer: "A",
    solution: String.raw`Newton's method is written as \(x_{n + 1} = x_{n} - \frac{f\left( x_{n} \right)}{f'\left( x_{n} \right)}.\) An undefined \(x_{1}\) can be obtained if \(f'(x_{0})\) is equal to 0.

    \(f'(x) = 3x^{2} - 3,\) which is equal to 0 at \(x = \pm 1.\) Since we only want a possible value of \(x_{0},\) \(1\) suffices.`,
  },
  {
    id: 10810, number: 687, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 9 },
    topic: "Definite Integrals", difficulty: 2, methods: [],
    question: String.raw`Evaluate: \(\int_{0}^{\frac{\pi}{6}}{\sec(x)dx}\)`,
    choices: [String.raw`\(\frac{\ln(3)}{2}\)`, String.raw`\(2 + \sqrt{3}\)`, String.raw`\(\ln{(3)}\)`, String.raw`\(1 + \sqrt{2}\)`, "NOTA"], answer: "A",
    solution: String.raw`An antiderivative of \(\sec x\) is \(\ln|\sec x+\tan x|\). At \(\pi/6\) the sum inside the logarithm is \(2/\sqrt3+1/\sqrt3=\sqrt3\); at 0 it is 1. The integral is \(\ln\sqrt3-\ln1=\tfrac12\ln3\).`,
  },
  {
    id: 10811, number: 688, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 10 },
    topic: "Differential Equations", difficulty: 2, methods: [],
    question: String.raw`If \(\frac{dy}{dx} + y = 1\) and \(y = 6\) when \(x = 0\), what is \(y\) when \(x = 1\)?`,
    choices: [String.raw`\(5\)`, String.raw`\(\frac{e + 5}{e}\)`, String.raw`\(\frac{5 - e}{e}\)`, String.raw`\(\frac{12}{e}\)`, "NOTA"], answer: "B",
    solution: String.raw`We can use separation of variables here to isolate the \(y\) term

    \[\frac{dy}{dx} + (y - 1) = 0\]

    \[\frac{dy}{y - 1} + dx = 0\]

    \[\ln{|y - 1|} + x = C.\]

Plugging in the initial conditions, we get \(C = \ln(5).\)

Plugging in \(x = 1,\) we get

\[\ln(5) - 1 = \ln(y - 1)\]

\[\frac{5}{e} = y - 1\]

\[y = 1 + \frac{5}{e} = \frac{e + 5}{e}.\]`,
  },
  {
    id: 10812, number: 689, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 11 },
    topic: "Optimization", difficulty: 3, methods: ["Critical Points"],
    question: "Carter is crossing a river 4 miles wide to get to a concert, which is 8 miles downstream of the point directly across the river from him. Carter is a fast runner and can run at 10 miles/hour, while he can only swim at 6 miles/hour. How long would it take Carter to get to his destination, in minutes, if he travels along the path that takes the minimum amount of time?",
    choices: ["80", "48", "64", "75", "NOTA"], answer: "A",
    solution: String.raw`Let \(X\) be the downstream distance to the landing point. The swimming distance is \(Y=\sqrt{16+X^2}\) miles and the run is \(8-X\) miles for \(0\le X\le8\). The time in hours is \(T(X)=Y/6+(8-X)/10\). Its derivative vanishes when \(X/Y=6/10=3/5\), giving \(X=3\) and \(Y=5\). Its second derivative is positive throughout, and landing outside this interval only lengthens the route. Total time in minutes is \(60(5/6+5/10)=80\).
[[solution-diagram:mu-2023-sw-11]]`,
  },
  {
    id: 10813, number: 690, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 12 },
    topic: "Rate of Change", difficulty: 3, methods: ["Related Rates"],
    question: String.raw`A radioactive carp bit Carter while he was swimming across the river, and as a result, he is undergoing metamorphosis! Carter’s body is currently a cone with a radius of 2 meters and a height of 6 meters, but the radioactive chemicals in his bloodstream are making his volume decrease at a rate of \(36\pi\ m^{3}/s\) such that the ratio between his height and radius remains constant. How fast, in meters per second, is Carter’s height decreasing at this point?`,
    choices: ["3", "6", "9", "18", "NOTA"], answer: "C",
    solution: String.raw`Noting \(h = 3r,\) we get

    \[V = \frac{1}{3}\pi r^{2}(3r) = \pi r^{3}.\]

    Taking the derivative of both sides, we get

    \[V' = 3\pi r^{2}r'\ \Rightarrow \ r' = \frac{- 36\pi}{3\pi \cdot 2^{2}} = - 3.\]

    Thus, \(h' = - 9,\) and since we want the speed that \(h\) is changing, the answer is \(9.\)`,
  },
  {
    id: 10814, number: 691, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 13 },
    topic: "Optimization", difficulty: 2, methods: [],
    question: String.raw`Carter goes home after recovering from the radioactive carp attack, and he sees that his neighbor Kayne is building a rectangular fence. Kayne’s house’s wall makes up one side of the fence, while the other three sides are to be built with 30 feet of fencing. Kayne fences off a square area of 100 \(\mathrm{ft}^{2}\), while Carter knows that the maximum amount of area Kayne could have fenced off rectangularly is \(M\) \(\mathrm{ft}^{2}\). What is \(M\)?`,
    choices: [String.raw`\(\frac{225}{2}\)`, String.raw`\(100\)`, String.raw`\(\frac{361}{3}\)`, "125", "NOTA"], answer: "A",
    solution: String.raw`Call the side of the fence opposite the house \(y\), and the other two sides \(x\), then

    \(y + 2x = 30\ \Rightarrow \ y = 30 - 2x\) is our limiting condition.

    We are trying to maximize the fenced off area, which is given by \(A = xy.\)

    Substitute in the limiting condition, we get

    \[A = 30x - 2x^{2}.\]

    Taking the derivative and setting it to 0,

    \[\frac{dA}{dx} = 30 - 4x = 0\ \Rightarrow \ x = \frac{15}{2}.\]

    Substituting x back into limiting condition to solve for y, we get \(y = 15.\) Thus,

    \[A_{\max} = 15 \cdot \frac{15}{2} = \frac{225}{2} = M.\]`,
  },
  {
    id: 10815, number: 692, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 14 },
    topic: "Rate of Change", difficulty: 3, methods: [],
    question: String.raw`Kayne is racing against Tyler, both starting at the same point. Kayne starts at rest with 0 acceleration and starts to run with constant jerk (derivative of acceleration) of 6 \(m/s^{3}\), while Tyler starts with velocity 4 \(m/s\) and constantly accelerates at a rate of 6 \(m/s^{2}\). The two start racing and reach the finish line at the exact same time. What nonzero distance did both of them run, in meters?`,
    choices: [String.raw`\(\frac{95}{6}\)`, "16", "24", "64", "NOTA"], answer: "D",
    solution: String.raw`Jerk is the derivative of acceleration. Since Kayne starts with velocity and acceleration zero, successively integrating 6 gives acceleration \(6t\), velocity \(3t^2\), and distance \(t^3\). Tyler starts at 4 m/s with acceleration 6, giving velocity \(6t+4\) and distance \(3t^2+4t\). Setting the distances equal gives \(t(t+1)(t-4)=0\). The only positive root is 4, so both run \(4^3=64\) meters.`,
  },
  {
    id: 10816, number: 693, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 15 },
    topic: "Definite Integrals", difficulty: 3, methods: ["U-Substitution"],
    question: String.raw`Evaluate: \(\int_{0}^{\frac{\pi}{3}}{\sec^{5}(x)\tan^{3}(x)dx}.\)`,
    choices: [String.raw`\(12\)`, String.raw`\(\frac{416}{35}\)`, String.raw`\(\frac{59}{5}\)`, String.raw`\(\frac{418}{35}\)`, "NOTA"], answer: "D",
    solution: String.raw`Substitute \(u=\sec x\), \(du=\sec x\tan x\,dx\). Factor out \(\sec x\tan x\) before changing variables. The remaining factors give \(\sec^4x\tan^2x=u^4(u^2-1)\) and the new bounds are 1 and 2. Thus \(\int_1^2(u^6-u^4)\,du=[u^7/7-u^5/5]_1^2=418/35\).`,
  },
  {
    id: 10817, number: 694, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 16 },
    topic: "Applications of Integration", difficulty: 2, methods: [],
    question: String.raw`Find the average value of the function \(f(x) = \frac{3}{1 + 9x^{2}}\) over the interval \(\left\lbrack 0,\ \frac{1}{3} \right\rbrack.\)`,
    choices: [String.raw`\(\frac{\tan^{- 1}\left( \frac{1}{9} \right)}{3}\)`, String.raw`\(\frac{\pi}{4}\)`, String.raw`\(\frac{3\pi}{4}\)`, String.raw`\(\frac{9}{2}\)`, "NOTA"], answer: "C",
    solution: String.raw`The mean value of \(f\) over \([a,b]\) is \(\frac1{b-a}\int_a^b f(x)\,dx\). Here the interval length is \(1/3\) and an antiderivative is \(\arctan(3x)\). Thus the mean is \(3(\arctan1-\arctan0)=3\pi/4\).`,
  },
  {
    id: 10818, number: 695, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 17 },
    topic: "Definite Integrals", difficulty: 3, methods: ["Parity"],
    question: String.raw`Evaluate: \[\int_{- \frac{\pi}{3}}^{\frac{\pi}{3}}\frac{1}{1 - \sin(x)}\ dx.\]`,
    choices: ["4", String.raw`\(2\sqrt{3}\)`, String.raw`\(3\sqrt{2}\)`, String.raw`\(\sqrt{3}\)`, "NOTA"], answer: "B",
    solution: String.raw`We can bound swap with \(u = - x\), \(du = - dx.\)

    \[\int_{- \frac{\pi}{3}}^{\frac{\pi}{3}}\frac{1}{1 - \sin(x)}dx = \int_{\frac{\pi}{3}}^{- \frac{\pi}{3}}\frac{- 1}{1 + \sin(u)}du = \int_{- \frac{\pi}{3}}^{\frac{\pi}{3}}\frac{1}{1 + \sin(u)}du = \int_{- \frac{\pi}{3}}^{\frac{\pi}{3}}\frac{1}{1 + \sin(x)}dx\]

    If we call the initial Integral \(I\) and add the bound swapped integral to the original, we get

    \[2I = \int_{- \frac{\pi}{3}}^{\frac{\pi}{3}}{\frac{1}{1 - \sin(x)} + \frac{1}{1 + \sin(x)}}dx = \int_{- \frac{\pi}{3}}^{\frac{\pi}{3}}\frac{1 + \sin(x) + 1 - \sin(x)}{1 - {(\sin(x))}^{2}}dx\]

    \[2I = \int_{- \frac{\pi}{3}}^{\frac{\pi}{3}}\frac{2}{\left( \cos(x) \right)^{2}}dx = \int_{- \frac{\pi}{3}}^{\frac{\pi}{3}}{2\left( \sec(x) \right)^{2}}dx\]

    \[I = \left. \ \tan(x) \right|_{- \frac{\pi}{3}}^{\frac{\pi}{3}} = \sqrt{3} - \left( - \sqrt{3} \right) = 2\sqrt{3}.\]`,
  },
  {
    id: 10819, number: 696, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 18 },
    topic: "Limits", difficulty: 2, methods: ["Exponential Limits"],
    question: String.raw`Simplify: \[\lim_{n \rightarrow \infty}\left( 1 - \frac{1}{n} \right)^{- 3n}\]`,
    choices: [String.raw`\(e^{- 3}\)`, String.raw`\(e^{\frac{1}{3}}\)`, String.raw`\(e^{3}\)`, String.raw`\(e^{- \frac{1}{3}}\)`, "NOTA"], answer: "C",
    solution: String.raw`We can rewrite the expression as

    \[\lim_{n \rightarrow \infty}\left( 1 + \frac{1}{- n} \right)^{- 3n}\]

    Substituting \(u = - \frac{1}{n},\)

    \[\lim_{u \rightarrow 0}{(1 + u)^{\frac{3}{u}} = e^{3}}.\]`,
  },
  {
    id: 10820, number: 697, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 19 },
    topic: "Power Series", difficulty: 2, methods: [],
    question: String.raw`For a certain function \(f(x),\) its Maclaurin series can be given as \(5 + 3x + 23x^{2} - 7x^{3} + \ldots\) What is \(f^{'''}(0)\)?`,
    choices: ["-7", "21", "-21", "-14", "NOTA"], answer: "E",
    solution: String.raw`The Maclaurin series for a function \(f(x)\) is

    \[f(x) = f(0) + \frac{f^{(1)}(0) \cdot x}{1!} + \frac{f^{(2)}(0) \cdot x^{2}}{2!} + \frac{f^{(3)}(0) \cdot x^{3}}{3!} + \ldots\]

    Matching up the coefficients,

    \[\frac{f^{(3)}(0) \cdot x^{3}}{3!} = - 7x^{3},\]

    \[\frac{f^{(3)}(0)}{6} = - 7,\]

    \[f^{'''}(0) = - 42.\]`,
  },
  {
    id: 10821, number: 698, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 20 },
    topic: "Improper Integrals", difficulty: 4, methods: ["Power Series"],
    question: String.raw`Evaluate: \(\int_{0}^{1}\frac{\ln(1 - x)}{x}\ dx.\)`,
    choices: [String.raw`\(\frac{\pi^{2}}{12}\)`, String.raw`\(\frac{\pi^{2}}{6}\)`, String.raw`\(- \frac{\pi^{2}}{6}\)`, String.raw`\(- \frac{\pi^{2}}{12}\)`, "NOTA"], answer: "C",
    solution: String.raw`Expand \(-\ln(1-x)=\sum_{n=1}^\infty x^n/n\) for \(0\le x<1\). Dividing by \(x\) gives a series of nonnegative terms, so monotone convergence justifies integrating up to the improper endpoint term by term. Since \(\int_0^1x^{n-1}/n\,dx=1/n^2\), the original integral is \(-\sum_{n=1}^\infty1/n^2=-\pi^2/6\).`,
  },
  {
    id: 10822, number: 699, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 21 },
    topic: "Power Series", difficulty: 3, methods: [],
    question: String.raw`If \(f(x) = x^{3}\cos(x) + x^{2}\sin(x),\) find \(f^{(5)}(0)\).`,
    choices: [String.raw`\(64\)`, String.raw`\(- 80\)`, String.raw`\(- 64\)`, String.raw`\(80\)`, "NOTA"], answer: "B",
    solution: String.raw`You can either take the fifth derivative by hand, or use Taylor series to find the \(x^5\) term in the expansion for \(f(x)\). In \(x^3\cos x\) the coefficient of \(x^5\) is \(-1/2\). In \(x^2\sin x\) it is \(-1/6\). Their sum is \(-2/3\), so \(f^{(5)}(0)=5!(-2/3)=-80\).`,
  },
  {
    id: 10823, number: 700, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 22 },
    topic: "Polar Area", difficulty: 4, methods: [],
    question: String.raw`Compute the area inside both of the polar curves \(r(\theta) = 2 + 2\cos(\theta)\) and \(r(\theta) = \ 2 + 2\sin(\theta)\).`,
    choices: [String.raw`\(6\pi - 8\sqrt{2}\)`, String.raw`\(2\pi - \frac{3\sqrt{3}}{2}\)`, String.raw`\(8\pi - 6\sqrt{3}\)`, String.raw`\(3\pi + 6\sqrt{2}\)`, "NOTA"], answer: "A",
    solution: String.raw`The two radii are equal at \(\theta = \frac{\pi}{4},\frac{5\pi}{4}.\) Since the graph is symmetric about \(\theta = \frac{\pi}{4}\), we can just integrate half the area of intersection and double it. Integrating from \(\frac{\pi}{4}\) to \(\frac{5\pi}{4}\), the area of intersection is just the area bounded by \(r = 2 + 2\cos{(\theta)},\) so our integral is

    \[2 \cdot \frac{1}{2}\int_{\frac{\pi}{4}}^{\frac{5\pi}{4}}{(2 + 2\cos(\theta))^{2}d\theta} = \int_{\frac{\pi}{4}}^{\frac{5\pi}{4}}{4 + 8\cos(\theta) + 4\cos^{2}(\theta)\ d\theta}.\]

    We can substitute \(\cos^{2}{(\theta)}\) with \(\frac{\cos(2\theta) + 1}{2}\) to get

    \[\int_{\frac{\pi}{4}}^{\frac{5\pi}{4}}{4 + 8\cos{(\theta)} + 4\left( \frac{\cos(2\theta) + 1}{2} \right)d\theta} = \int_{\frac{\pi}{4}}^{\frac{5\pi}{4}}{6 + 8\cos{(\theta)} + 2\cos{(2\theta)}\ d\theta}\]

    \[= 6\left( \frac{5\pi}{4} \right) + 8\sin\left( \frac{5\pi}{4} \right) + \sin\left( 2 \cdot \frac{5\pi}{4} \right) - 6\left( \frac{\pi}{4} \right) - 8\sin\left( \frac{\pi}{4} \right) - \sin\left( 2 \cdot \frac{\pi}{4} \right)\]

    \[= 6\pi - 8\sqrt{2}.\]`,
  },
  {
    id: 10824, number: 701, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 23 },
    topic: "Definite Integrals", difficulty: 3, methods: ["U-Substitution"],
    question: String.raw`Evaluate: \(\int_{0}^{1}\left( e^{e^{x}} - e^{e^{x} - x} \right)dx\)`,
    choices: [String.raw`\(e^{e + 1} + 1\)`, String.raw`\(e^{e - 1} - 1\)`, String.raw`\(e^{e - 1} - e\)`, String.raw`\(e^{e + 1} - e\)`, "NOTA"], answer: "C",
    solution: String.raw`Factor the integrand as \((e^x-1)e^{e^x-x}\). We notice that \(e^x-1\) is the derivative of \(e^x-x\), so substitute \(u=e^x-x\). The bounds are 1 and \(e-1\). Integrating \(e^u\) gives \(e^{e-1}-e\).`,
  },
  {
    id: 10825, number: 702, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 24 },
    topic: "Limits", difficulty: 3, methods: ["Rationalization"],
    question: String.raw`Evaluate: \[\lim_{x \rightarrow \infty}\left( \sqrt{x^{4} + 4x^{3} + 12x^{2} + 9x + 6} - \sqrt{x^{4} + 4x^{3} + 8x^{2} - 4x + 2} \right)\]`,
    choices: [String.raw`\(0\)`, String.raw`\(1\)`, String.raw`\(2\)`, "DNE", "NOTA"], answer: "C",
    solution: String.raw`Rationalize the difference. Subtracting the radicands gives \(4x^2+13x+4\). Divide this numerator and the sum of the radicals in the denominator by \(x^2\). Each radical divided by \(x^2\) tends to 1 as \(x\to\infty\), while the numerator tends to 4. The requested limit is \(4/(1+1)=2\).`,
  },
  {
    id: 10826, number: 703, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 25 },
    topic: "Optimization", difficulty: 3, methods: [],
    question: String.raw`What is the volume of the largest right circular cylinder that can be inscribed inside a sphere of radius \(6\)?`,
    choices: [String.raw`\(108\pi\)`, String.raw`\(108\sqrt{2}\pi\)`, String.raw`\(96\pi\)`, String.raw`\(96\sqrt{3}\pi\)`, "NOTA"], answer: "D",
    solution: String.raw`Draw a picture of the cylinder inscribed in the sphere of radius 6; it's apparent that if the radius of the cylinder is \(r\) and the height is \(h\), then \(r,\ \frac{h}{2},\) and \(6\) form a right triangle, with \(6^{2} = r^{2} + \frac{h^{2}}{4}.\)

    Thus, our limiting condition is \(r^{2} = 36 - \frac{h^{2}}{4}\) and we need to maximize the volume of the cylinder: \(\pi r^{2}h.\)

    Substituting in \(36 - \frac{h^{2}}{4}\) for \(r^{2}\), we get \(36\pi h - \frac{\pi h^{3}}{4}\) as the volume of the cylinder. Taking the derivative with respect to \(h\) and setting it equal to \(0\), we get

    \[36\pi - \frac{3\pi h^{2}}{4} = 0\ \Rightarrow h = 4\sqrt{3}.\]

    Plugging \(h\) back into \(r^{2} + \frac{h^{2}}{4} = 36\), we get \(r = 2\sqrt{6}.\) Thus, the volume of the largest cylinder that can fit inside the sphere of radius 6 is \(\pi \cdot 24 \cdot 4\sqrt{3} = 96\sqrt{3}\pi.\)`,
  },
  {
    id: 10827, number: 704, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 26 },
    topic: "Improper Integrals", difficulty: 3, methods: ["U-Substitution"],
    question: String.raw`Evaluate: \[\int_{0}^{\frac{\pi}{2}}\frac{\sin^{3}(x)}{\sqrt{\cos(x)}}\ dx.\]`,
    choices: [String.raw`\(\frac{3}{2}\)`, "0", String.raw`\(\frac{9}{4}\)`, String.raw`\(\frac{8}{5}\)`, "NOTA"], answer: "D",
    solution: String.raw`Use the substitution \(u=\sqrt{\cos x}\), so \(2u\,du=-\sin x\,dx\). The remaining factor is \(\sin^2x=1-u^4\) and the denominator is \(u\). Reversing the bounds gives \(\int_0^1 2(1-u^4)\,du\). This integral is finite at 0, verifying convergence at the original endpoint. Its value is \(2-2/5=8/5\).`,
  },
  {
    id: 10828, number: 705, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 27 },
    topic: "Differential Equations", difficulty: 3, methods: ["First-Order Linear Equations"],
    question: String.raw`If \(\frac{dy}{dx} + y = x^{2}\) and \(y = 6\) when \(x = 0\), what is \(y\) when \(x = 2\)?`,
    choices: [String.raw`\(\frac{4e + 4}{e}\)`, String.raw`\(\frac{e^{2} + 4}{e^{2}}\)`, String.raw`\(\frac{e + 2}{e}\)`, String.raw`\(\frac{2e^{2} + 4}{e^{2}}\)`, "NOTA"], answer: "D",
    solution: String.raw`This differential equation can be solved using integrating factors. Multiplying by \(e^x\) gives \((e^xy)'=x^2e^x\). Integrating twice by parts yields \(e^xy=e^x(x^2-2x+2)+C\). The condition \(y(0)=6\) gives \(C=4\). At \(x=2\) this gives \(y=2+4/e^2=(2e^2+4)/e^2\).`,
  },
  {
    id: 10829, number: 706, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 28 },
    topic: "Definite Integrals", difficulty: 4, methods: ["Partial Fractions"],
    question: String.raw`Evaluate: \[\int_{0}^{\frac{\pi}{2}}\frac{1}{\sin^{4}{(x)} + \cos^{4}{(x)}}\ dx.\]`,
    choices: [String.raw`\(\frac{\pi}{2}\)`, String.raw`\(\frac{\pi}{\sqrt{2}}\)`, String.raw`\(\pi\)`, String.raw`\(\pi\sqrt{2}\)`, "NOTA"], answer: "B",
    solution: String.raw`Let \(u=\tan x\). Dividing by \(\cos^4x\) and using \(du=\sec^2x\,dx\) gives \(\int_0^\infty (1+u^2)/(1+u^4)\,du\). Factor the denominator as \((u^2+\sqrt2u+1)(u^2-\sqrt2u+1)\). The integrand is half the sum of the reciprocals of these quadratics. Complete the square in each. An antiderivative is \([\arctan(\sqrt2u+1)+\arctan(\sqrt2u-1)]/\sqrt2\). At 0 the angles cancel; at infinity each tends to \(\pi/2\). The result is \(\pi/\sqrt2\).`,
  },
  {
    id: 10830, number: 707, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 29 },
    topic: "Improper Integrals", difficulty: 4, methods: ["Geometric Series"],
    question: String.raw`Evaluate: \[\int_{0}^{\infty}{e^{- x\ }\left| \sin{(x)} \right|}dx.\]`,
    choices: [String.raw`\(\frac{e^{\pi} + 1}{2(e^{\pi} - 1)}\)`, String.raw`\(\frac{e^{\pi} - 1}{2(e^{\pi} + 1)}\)`, String.raw`\(\frac{e^{\pi} + 1}{2(1 - e^{- \pi})}\)`, String.raw`\(\frac{1 - e^{- \pi}}{2}\)`, "NOTA"], answer: "A",
    solution: String.raw`We split the integral into smaller integrals, each smaller than the last by a common factor. Since \(|\sin x|\) has period \(\pi\), the contribution from \([k\pi,(k+1)\pi]\) is \(e^{-k\pi}I\), where \(I=\int_0^\pi e^{-x}\sin x\,dx\). Integration by parts gives \(I=\int_0^\pi e^{-x}\cos x\,dx\) because the sine endpoint terms vanish. Integrating by parts again gives \(I=1+e^{-\pi}-I\). Thus \(I=(1+e^{-\pi})/2\). Summing the geometric series gives \(I/(1-e^{-\pi})=(e^\pi+1)/(2(e^\pi-1))\).`,
  },
  {
    id: 10831, number: 708, division: "Mu",
    source: { competition: "2023 March Statewide", event: "Calculus Individual", questionNumber: 30 },
    topic: "Limits", difficulty: 3, methods: ["Power Series"],
    question: String.raw`Evaluate: \[\lim_{x \rightarrow 0}\frac{\ln\left( \frac{\sin(x)}{x} \right)}{x^{2}}\]`,
    choices: [String.raw`\(- \frac{1}{3}\)`, String.raw`\(- \frac{1}{6}\)`, String.raw`\(0\)`, "DNE", "NOTA"], answer: "B",
    solution: String.raw`We will use Taylor series. Since \(\sin x/x=1-x^2/6+O(x^4)\) and \(\ln(1+u)=u+O(u^2)\), the numerator equals \(-x^2/6+O(x^4)\). Dividing by \(x^2\) and taking the limit gives \(-1/6\).`,
  },
];
