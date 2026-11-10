import type { Question, QuestionIllustration } from "@/types/question";

const r = String.raw;
function entry(original: number, topic: string, difficulty: number, methods: string[], question: string, choices: string[], answer: Question["answer"], solution: string, illustration?: QuestionIllustration): Question {
  return { id: 20330 + original, number: 267 + original, division: "Alpha", topic, difficulty, methods,
    source: { competition: "2026 January Statewide", event: "Precalculus Individual", questionNumber: original },
    question, choices, answer, solution, ...(illustration ? { illustration } : {}) };
}

export const alphaJanuaryStatewide2026Questions: Question[] = [
  entry(1, "Trigonometry", 2, ["Trigonometric Identities"],
    r`Find the sum of all solutions (expressed in radians) in the interval \(0\le\theta<2\pi\) to the following equation:
\[3\tan^3\theta\cot\theta=1.\]`,
    [r`\(\pi\)`, r`\(\frac{4\pi}{3}\)`, r`\(2\pi\)`, r`\(4\pi\)`, "NOTA"], "D",
    r`Where the original expression is defined,
\[3\tan^3\theta\cot\theta=3(\tan\theta)^3\left(\frac1{\tan\theta}\right)=3\tan^2\theta.\]
Thus the equation holds if and only if \(\tan\theta=\pm\frac1{\sqrt3}\). This occurs for
\[\theta=\frac\pi6,\quad\frac{5\pi}6,\quad\frac{7\pi}6,\quad\frac{11\pi}6.\]
All four angles are in the requested interval and make both tangent and cotangent defined. The sum of these solutions is \(\frac{24\pi}{6}=\boxed{4\pi}\).`),
  entry(2, "Logs and Exponents", 1, [],
    r`Lead-217 is a lead isotope (\({}^{217}_{82}\mathrm{Pb}\) for you chemistry nerds) with a half-life of \(20\) seconds. That means that every \(20\) seconds, the amount of lead-217 in a sample is halved as the radioactive isotope breaks down into daughter isotopes. If a sample initially has \(100\) picograms of lead-217, which one of the following models the amount of lead-217 left in the sample, in picograms, after \(t\) minutes (note: the half-life given was in seconds but the expression requested inputs \(t\) in minutes)?`,
    [r`\(300(\frac12)^t\)`, r`\(100(\frac12)^{t/3}\)`, r`\(100(\frac16)^t\)`, r`\(100(\frac12)^{3t}\)`, "NOTA"], "D",
    r`The amount of lead after \(N\) half-lives is \(100(\frac12)^N\). There are three half-lives every minute, since \(60/20=3\), so the number of half-lives in \(t\) minutes is \(3t\). The amount of lead after \(t\) minutes is
\[\boxed{100\left(\frac12\right)^{3t}}.\]`),
  entry(3, "Trigonometry", 2, [],
    r`\(\arcsin(-\cos(\frac\pi7))\) evaluates to \(\frac{m\pi}{n}\) where \(m\) and \(n\) are relatively prime integers. Find \(mn\).`,
    [r`\(-42\)`, r`\(-7\)`, "14", "70", "NOTA"], "E",
    r`Use \(\cos(\frac\pi7)=\sin(\frac\pi2-\frac\pi7)=\sin(\frac{5\pi}{14})\). Because \(-\frac{5\pi}{14}\) is in the principal range \([-\frac\pi2,\frac\pi2]\) of arcsine,
\[\arcsin\left(-\cos\frac\pi7\right)=-\frac{5\pi}{14}.\]
Regardless of whether we use \((m,n)=(-5,14)\) or \((m,n)=(5,-14)\), the product is \(\boxed{-70}\). This is not listed, so the answer is NOTA.`),
  entry(4, "Trigonometry", 1, [],
    r`Find the sum of all values of \(\theta\) in \(0^\circ\le\theta<360^\circ\) for which \(\csc\theta=-2\).`,
    [r`\(180^\circ\)`, r`\(270^\circ\)`, r`\(360^\circ\)`, r`\(540^\circ\)`, "NOTA"], "D",
    r`\(\csc\theta=-2\) is equivalent to \(\sin\theta=-\frac12\). This occurs when \(\theta\) is a third- or fourth-quadrant angle with a reference angle of \(30^\circ\). In the interval given, those angles are \(210^\circ\) and \(330^\circ\). These sum to \(\boxed{540^\circ}\).`),
  entry(5, "Trigonometry", 1, ["Arc Length"],
    r`In a circle of radius \(12\), a central angle of \(\theta\) subtends an arc of length \(9\pi\). Find \(\cos\theta\).`,
    [r`\(-\frac{\sqrt3}{2}\)`, r`\(-\frac{\sqrt2}{2}\)`, r`\(-\frac12\)`, "0", "NOTA"], "B",
    r`An arc of length \(9\pi\) in a circle of radius \(12\) is subtended by a central angle of
\[\theta=\frac{9\pi}{12}=\frac{3\pi}{4}\]
radians. Therefore \(\cos\theta=\cos(\frac{3\pi}{4})=\boxed{-\frac{\sqrt2}{2}}\).`),
  entry(6, "Logs and Exponents", 2, ["Logarithms"],
    r`Let \(f(x)=\log_2(x-1)\) and \(g(x)=\log_2(x+2)-1\). Find the sum of all real values of \(x\) where the graphs of \(y=f(x)\) and \(y=g(x)\) intersect.`,
    ["2", "3", "4", "5", "NOTA"], "C",
    r`Both logarithms are defined when \(x>1\). The equation
\[\log_2(x-1)=\log_2(x+2)-1\]
implies
\[1=\log_2(x+2)-\log_2(x-1)=\log_2\left(\frac{x+2}{x-1}\right).\]
This occurs when \(\frac{x+2}{x-1}=2\), or \(x+2=2x-2\). The only solution is \(x=4\), which satisfies the domain restriction. The requested sum is \(\boxed4\).`),
  entry(7, "Trigonometry", 2, ["Trigonometric Identities"],
    r`Evaluate \(\sin\left(\arccos(\frac2{\sqrt{10}})-\arctan(-\frac13)\right)\).`,
    [r`\(\frac{2+3\sqrt6}{10}\)`, r`\(\frac{-2+3\sqrt6}{10}\)`, r`\(\frac{6+\sqrt6}{10}\)`, r`\(\frac{6-\sqrt6}{10}\)`, "NOTA"], "A",
    r`Let \(\alpha=\arccos(\frac2{\sqrt{10}})\) and \(\beta=\arctan(-\frac13)\). The principal values put \(\alpha\) in the first quadrant and \(\beta\) in the fourth quadrant. Note that
\[\sin\alpha=\frac{\sqrt6}{\sqrt{10}},\quad\cos\alpha=\frac2{\sqrt{10}},\quad\sin\beta=-\frac1{\sqrt{10}},\quad\cos\beta=\frac3{\sqrt{10}}.\]
Using the subtraction identity,
\[\begin{aligned}\sin(\alpha-\beta)&=\sin\alpha\cos\beta-\cos\alpha\sin\beta\\&=\frac{3\sqrt6}{10}+\frac2{10}=\boxed{\frac{3\sqrt6+2}{10}}.\end{aligned}\]`),
  entry(8, "Trigonometry", 3, [],
    r`The temperature throughout the day increases and decreases. In January in Tallahassee, the daily maximum temperature is typically \(64^\circ\mathrm F\) and occurs at 2 PM. The daily minimum temperature in January in Tallahassee is typically \(42^\circ\mathrm F\) and occurs at 2 AM. Assume that every day in January in Tallahassee follows this pattern. Further, assume the daily temperature in January in Tallahassee can be modelled well by a function of the form \(F(t)=a\sin(b(t+c))+d\), where \(t\) is hours after midnight and \(F(t)\) is the temperature in \(^\circ\mathrm F\). What is the minimum possible value of \(|a|+|\frac{48b}{\pi}|+|c|+|d|\)?`,
    ["72", "76", "79", "80", "NOTA"], "A",
    r`If the range of \(F(t)\) is \([42,64]\), then
\[d=\frac{64+42}{2}=53,\qquad |a|=\frac{64-42}{2}=11.\]
The daily cycle has period \(24\), giving \(|b|=\frac{2\pi}{24}=\frac\pi{12}\). For an extremum at \(t=2\),
\[\frac\pi{12}(2+c)=\frac\pi2+\pi k,\qquad c=4+12k\quad(k\in\mathbb Z).\]
The smallest possible \(|c|\) is \(4\). Choosing \(a=-11\), \(b=\frac\pi{12}\), and \(c=4\) makes the 2 AM value a minimum and the 2 PM value a maximum:
\[F(t)=-11\sin\left(\frac\pi{12}(t+4)\right)+53.\]
Thus the minimum requested sum is \(11+4+4+53=\boxed{72}\).`),
  entry(9, "Trigonometry", 2, ["Trigonometric Identities"],
    r`Let \(f(x)=3\sin(3x-\frac\pi3)+4\) and \(g(x)=4\cos(3x+\frac\pi6)+2\). Find the amplitude of \((f+g)(x)\).`,
    ["1", "3.5", "5", "7", "NOTA"], "A",
    r`Note that
\[\begin{aligned}g(x)&=4\sin\left(\frac\pi2-\left(3x+\frac\pi6\right)\right)+2\\&=4\sin\left(-3x+\frac\pi3\right)+2\\&=-4\sin\left(3x-\frac\pi3\right)+2.\end{aligned}\]
Therefore
\[(f+g)(x)=-\sin\left(3x-\frac\pi3\right)+6.\]
The amplitude of this function is \(|-1|=\boxed1\).`),
  entry(10, "Conic Sections", 3, ["Asymptotes"],
    r`The conic \(Ax^2+Bxy+Cy^2+Dx+Ey+3=0\) is a hyperbola with asymptotes \(y=2x-5\) and \(y=-2x+3\). The hyperbola includes the point \((0,1)\). Find \(A+B+C+D+E\).`,
    [r`\(-20\)`, r`\(-15\)`, r`\(-10\)`, r`\(-5\)`, "NOTA"], "B",
    r`The asymptotes intersect at \((2,-1)\), so this is the center. Their slopes are \(\pm2\). Write the hyperbola as
\[4(x-2)^2-(y+1)^2=K.\]
This equation has the given asymptotes because setting its left side equal to zero gives \(y+1=\pm2(x-2)\). Substituting the point \((0,1)\) gives \(K=16-4=12\). Expanding,
\[4x^2-y^2-16x-2y+3=0.\]
The constant term already has the required normalization, so
\[A+B+C+D+E=4+0-1-16-2=\boxed{-15}.\]`),
  entry(11, "Geometry", 3, ["Law of Sines"],
    r`Triangle ABC has interior angles \(A=30^\circ\), \(B=45^\circ\), and \(C=105^\circ\). If the side opposite vertex \(C\) has length \(10\), the triangle's area may be written as \(k(\sqrt m+n)\) where \(k\), \(m\), and \(n\) are integers and \(m\) is prime. Find \(k+m+n\).`,
    ["21", "27", "29", "31", "NOTA"], "B",
    r`By the law of sines, \(\frac b{\sin B}=\frac c{\sin C}\), so
\[b=\frac{10\sin45^\circ}{\sin105^\circ}.\]
The area can be found with \(\frac12bc\sin A\). Since
\[\sin105^\circ=\sin(60^\circ+45^\circ)=\frac{\sqrt6+\sqrt2}{4},\]
the area is
\[\frac12\left(\frac{10\sin45^\circ}{\sin105^\circ}\right)(10)\sin30^\circ
=\frac{50}{\sqrt3+1}=25(\sqrt3-1).\]
Thus \(k=25\), \(m=3\), and \(n=-1\), giving \(k+m+n=25+3-1=\boxed{27}\).`,
    { src: "/questions/alpha-january-statewide-2026-triangle.svg", alt: "Triangle ABC with angles A 30 degrees, B 45 degrees, C 105 degrees, and side AB of length 10.", width: 380, height: 300 }),
  entry(12, "Trigonometry", 2, ["Trigonometric Identities"],
    r`Let \(\alpha\) and \(\beta\) be solutions to the following equation with \(0^\circ\le\alpha<\beta\le360^\circ\). Find \(\cos(\alpha-\beta)\).
\[\sin\theta+\cos\theta\cot\theta=2.\]`,
    [r`\(-\frac{\sqrt3}{2}\)`, r`\(-\frac12\)`, r`\(\frac12\)`, r`\(\frac{\sqrt3}{2}\)`, "NOTA"], "B",
    r`We may rewrite the equation as \(\sin\theta+\cos\theta\cdot\frac{\cos\theta}{\sin\theta}=2\). The original equation requires \(\sin\theta\ne0\). Multiplying both sides by \(\sin\theta\) yields
\[\sin^2\theta+\cos^2\theta=2\sin\theta,\qquad \sin\theta=\frac12.\]
In the interval given, the only solutions are \(\alpha=30^\circ\) and \(\beta=150^\circ\). Therefore
\[\cos(\alpha-\beta)=\cos(-120^\circ)=\boxed{-\frac12}.\]`),
  entry(13, "Logs and Exponents", 2, [],
    r`I am thinking of an exponential function \(f(x)=a(b)^x\) with real values of \(a\) and \(b\) and \(b>0\). If \(f(3)=\frac58\) and \(f(6)=40\), find \(f(7.5)\).`,
    ["8", "200", "320", "640", "NOTA"], "C",
    r`We know \(ab^3=\frac58\) and \(ab^6=40\). Dividing the latter by the former yields \(b^3=64\). Since \(b>0\), \(b=4\). Thus
\[f(7.5)=ab^{7.5}=ab^6\cdot b^{1.5}=40\cdot4^{3/2}=40\cdot8=\boxed{320}.\]`),
  entry(14, "Trigonometry", 3, ["Substitution"],
    r`Find the sum of all solutions in the interval \(0\le\theta<8\pi\):
\[3\cos^2\theta+4\sin\theta-4=0.\]`,
    [r`\(2\pi\)`, r`\(6\pi\)`, r`\(18\pi\)`, r`\(42\pi\)`, "NOTA"], "D",
    r`Using \(\cos^2\theta=1-\sin^2\theta\), the equation becomes
\[3\sin^2\theta-4\sin\theta+1=(\sin\theta-1)(3\sin\theta-1)=0.\]
For \(\sin\theta=1\), the solutions are \(\frac\pi2+2k\pi\) for \(k=0,1,2,3\). Their sum is \(2\pi+2\pi(0+1+2+3)=14\pi\).

For \(\sin\theta=\frac13\), let \(u=\arcsin(\frac13)\). In each of the four periods, the pair is
\[u+2k\pi,\qquad\pi-u+2k\pi.\]
The pair sums are \(\pi,5\pi,9\pi,13\pi\), totaling \(28\pi\). In total, all solutions sum to \(14\pi+28\pi=\boxed{42\pi}\).`),
  entry(15, "Functions", 1, ["Even Functions"],
    r`Let \(h(x)\) be an even function. If \(h(x)\) is decreasing and concave up on the interval \((2,5)\), then what can be said of \(h(x)\) on the interval \((-5,-2)\)?`,
    [r`\(h(x)\) is decreasing and concave up on the interval \((-5,-2)\).`, r`\(h(x)\) is decreasing and concave down on the interval \((-5,-2)\).`, r`\(h(x)\) is increasing and concave up on the interval \((-5,-2)\).`, r`\(h(x)\) is increasing and concave down on the interval \((-5,-2)\).`, "NOTA"], "C",
    r`Since \(h\) is an even function, the behavior on \((-5,-2)\) may be determined by reflecting the graph from \(x=2\) to \(x=5\) over the \(y\)-axis. A reflection over the \(y\)-axis changes the function from decreasing to increasing but does not affect concavity. Thus \(h\) is \(\boxed{\text{increasing and concave up}}\) on \((-5,-2)\).`),
  entry(16, "Trigonometry", 3, ["Double-Angle Identity"],
    r`Let \(\theta\) be the obtuse angle formed by the lines \(y=2x+1\) and \(y=3x-5\). Find \(\tan(2\theta)\).`,
    [r`\(-\frac7{24}\)`, r`\(-\frac17\)`, r`\(\frac{24}7\)`, r`\(\frac7{24}\)`, "NOTA"], "A",
    r`Let the acute inclinations of the two lines be \(\alpha=\arctan2\) and \(\beta=\arctan3\). The acute angle between them has tangent
\[\tan(\beta-\alpha)=\frac{3-2}{1+(3)(2)}=\frac17.\]
The requested obtuse angle is its supplement, so \(\tan\theta=-\frac17\). Therefore
\[\tan(2\theta)=\frac{2\tan\theta}{1-\tan^2\theta}=\frac{-2/7}{1-1/49}=\boxed{-\frac7{24}}.\]`),
  entry(17, "Trigonometry", 4, ["Double-Angle Identity", "Telescoping"],
    r`The expression \(\cos(\frac\pi{17})\cos(\frac{2\pi}{17})\cos(\frac{4\pi}{17})\cos(\frac{8\pi}{17})\) evaluates to the rational number \(\frac pq\) where \(p\) and \(q\) are relatively prime positive integers. Find \(p+q\).`,
    ["3", "5", "13", "17", "NOTA"], "D",
    r`Let \(x=\frac\pi{17}\) and let the product be \(P\). Repeatedly using \(2\sin u\cos u=\sin(2u)\) gives
\[\begin{aligned}2\sin x\cos x&=\sin2x,\\4\sin x\cos x\cos2x&=\sin4x,\\8\sin x\cos x\cos2x\cos4x&=\sin8x,\\16\sin x\,P&=\sin16x.\end{aligned}\]
Since \(\sin(\frac{16\pi}{17})=\sin(\pi-\frac\pi{17})=\sin(\frac\pi{17})\ne0\), division gives \(P=\frac1{16}\). Therefore \(p+q=1+16=\boxed{17}\).`),
  entry(18, "Analytic Geometry", 3, ["Completing the Square"],
    r`Chanwoo and Vishnu are playing an odd game with Anish. Chanwoo stands at the origin while Vishnu stands at the point \((3,4)\). They tell Anish that his distance to Chanwoo must be at least twice his distance to Vishnu. Find the area of the region in which Anish is allowed to reside, assuming he follows the rules.`,
    [r`\(\frac{25\pi}{32}\)`, r`\(\frac{9\pi}{8}\)`, r`\(\frac{100\pi}{9}\)`, r`\(\frac{25\pi}{2}\)`, "NOTA"], "C",
    r`If Anish stands at \((x,y)\), the condition is
\[\sqrt{x^2+y^2}\ge2\sqrt{(x-3)^2+(y-4)^2}.\]
Both sides are nonnegative, so squaring is equivalent. Expanding and rearranging gives
\[3x^2+3y^2-24x-32y+100\le0.\]
Dividing by three and completing the square yields
\[(x-4)^2+\left(y-\frac{16}{3}\right)^2\le\frac{100}{9}.\]
Anish may stand anywhere within or on this circle of radius \(\frac{10}{3}\). Thus the area is
\[\pi\left(\frac{10}{3}\right)^2=\boxed{\frac{100\pi}{9}}.\]`),
  entry(19, "Trigonometry", 3, [],
    r`The function \(f\) is of the form \(f(x)=a\cos(bx+c)+d\). If \(f(2)=10\) is a maximum of the function and \(f(62)=4\) is a minimum of the function, which of the following is NOT a possible value of \(b\)?`,
    [r`\(\frac\pi{60}\)`, r`\(\frac\pi{20}\)`, r`\(\frac\pi{15}\)`, r`\(\frac\pi{12}\)`, "NOTA"], "C",
    r`The \(60\) units from \(x=2\) to \(x=62\) represent some integer number of periods plus half a period. Equivalently, the phase change \(60b\) must be an odd multiple of \(\pi\). For the positive values listed,
\[b=\frac{(2n+1)\pi}{60}\quad(n=0,1,2,\ldots).\]
Options A, B, and D correspond to \(n=0,1,2\). Option C is \(\frac\pi{15}=\frac{4\pi}{60}\), an even rather than odd multiple. Thus the impossible choice is \(\boxed{\frac\pi{15}}\).`),
  entry(20, "Logs and Exponents", 3, ["Absolute Value", "Logarithms"],
    r`Find the sum of all real solutions: \(\log_2(x^2+3)=\log_2(|x|)+\log_2(1-x)\).`,
    [r`\(-3\)`, r`\(-\frac52\)`, r`\(\frac12\)`, r`\(\frac72\)`, "NOTA"], "A",
    r`The logarithms require \(x\ne0\) and \(x<1\). Combining the right-hand logarithms gives
\[x^2+3=|x|(1-x).\]
For \(0<x<1\), this becomes \(2x^2-x+3=0\). Its discriminant is \(1-24=-23<0\), so it has no real solutions.

For \(x<0\), \(|x|=-x\), so
\[x^2+3=-x+x^2,\qquad x=-3.\]
This satisfies the domain and the original equation: both sides equal \(\log_2(12)\). The only solution, and hence the sum, is \(\boxed{-3}\).`),
  entry(21, "Trigonometry", 2, ["Double-Angle Identity"],
    r`The expression \(\sin(2\arctan(\frac x2))\) is equivalent to \(\frac{ax}{bx^2+c}\). Find \(\frac{bc}{a^2}\).`,
    [r`\(\frac18\)`, r`\(\frac14\)`, "1", "2", "NOTA"], "B",
    r`Let \(\theta=\arctan(\frac x2)\), so \(\tan\theta=\frac x2\). The double-angle identity gives, for every real \(x\),
\[\sin(2\theta)=\frac{2\tan\theta}{1+\tan^2\theta}=\frac{x}{1+x^2/4}=\frac{4x}{x^2+4}.\]
We may take \(a=4\), \(b=1\), and \(c=4\). Therefore
\[\frac{bc}{a^2}=\frac{(1)(4)}{4^2}=\boxed{\frac14}.\]
Scaling all three coefficients by the same nonzero constant leaves this ratio unchanged.`),
  entry(22, "Sequences and Series", 2, ["Power Series"],
    r`Fun fact for \(x\ne0\): \(e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}=\frac{x^0}{0!}+\frac{x^1}{1!}+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots\).
Evaluate \(\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n!}=\frac1{1!}-\frac1{2!}+\frac1{3!}-\frac1{4!}+\frac1{5!}-\cdots\).`,
    [r`\(\frac1{e-1}\)`, r`\(\frac1{e+1}\)`, r`\(\frac{1-e}{e}\)`, r`\(\frac{e-1}{e}\)`, "NOTA"], "D",
    r`Substitute \(x=-1\) into the supplied series:
\[e^{-1}=1-\frac1{1!}+\frac1{2!}-\frac1{3!}+\cdots.\]
Subtracting \(1\) and multiplying by \(-1\) gives
\[\frac1{1!}-\frac1{2!}+\frac1{3!}-\cdots=1-e^{-1}=\boxed{\frac{e-1}{e}}.\]`),
  entry(23, "Parametric", 3, ["Completing the Square", "Trigonometric Identities"],
    r`Which one of the following parametrically defined plane curves has the same graph as \(9x^2-4y^2-18x=27\)?`,
    [r`\(\begin{cases}x=1-2\tan\theta\\y=\frac13\sec\theta\end{cases}\)`, r`\(\begin{cases}x=1+2\tan\theta\\y=3\sec\theta\end{cases}\)`, r`\(\begin{cases}x=1+2\csc\theta\\y=\frac13\cot\theta\end{cases}\)`, r`\(\begin{cases}x=1-2\csc\theta\\y=3\cot\theta\end{cases}\)`, "NOTA"], "D",
    r`Rearranging the terms and completing the square yields
\[\frac{(x-1)^2}{4}-\frac{y^2}{9}=1.\]
Option D gives
\[\frac{(-2\csc\theta)^2}{4}-\frac{(3\cot\theta)^2}{9}=\csc^2\theta-\cot^2\theta=1.\]
As \(\theta\) ranges over the values for which cosecant and cotangent are defined, both branches are covered: \(\csc\theta\) takes every value in \(( -\infty,-1]\cup[1,\infty)\), with both signs of cotangent available. Option B instead gives \(\tan^2\theta-\sec^2\theta=-1\); A and C have the wrong vertical scale. Thus the answer is D.`),
  entry(24, "Matrices", 3, ["Matrix Inverse"],
    r`Let \(M=\begin{pmatrix}2&0&2\\-3&-1&-3\\2&6&5\end{pmatrix}\). Find the sum of the entries of \(M^{-1}\).`,
    [r`\(-2\)`, r`\(-1\)`, "1", "2", "NOTA"], "A",
    r`First we find the matrix of minors:
\[\begin{pmatrix}13&-9&-16\\-12&6&12\\2&0&-2\end{pmatrix}.\]
Next apply the checkerboard signs to obtain the cofactor matrix:
\[C=\begin{pmatrix}13&9&-16\\12&6&-12\\2&0&-2\end{pmatrix}.\]
Expansion along the first row gives \(\det M=2(13)+0(9)+2(-16)=-6\). Finally, transpose the cofactor matrix and divide by the determinant:
\[M^{-1}=\frac1{\det M}C^T=-\frac16\begin{pmatrix}13&12&2\\9&6&0\\-16&-12&-2\end{pmatrix}.\]
The sum of the entries is
\[-\frac16(13+12+2+9+6+0-16-12-2)=-\frac16(12)=\boxed{-2}.\]`),
  entry(25, "Trigonometry", 2, ["Product-to-Sum Identity"],
    r`Which one of the following is equivalent to \(\sin(50^\circ)\sin(10^\circ)\)?`,
    [r`\(\frac12\cos(40^\circ)-\frac14\)`, r`\(\frac12\cos(40^\circ)+\frac14\)`, r`\(\frac12\sin(40^\circ)+\frac{\sqrt3}{4}\)`, r`\(\frac12\sin(40^\circ)-\frac{\sqrt3}{4}\)`, "NOTA"], "A",
    r`This is a product-to-sum problem. The cosine subtraction and addition formulas give
\[\begin{aligned}\cos40^\circ&=\cos50^\circ\cos10^\circ+\sin50^\circ\sin10^\circ,\\\cos60^\circ&=\cos50^\circ\cos10^\circ-\sin50^\circ\sin10^\circ.\end{aligned}\]
Subtracting the two equations gives \(\cos40^\circ-\cos60^\circ=2\sin50^\circ\sin10^\circ\). Dividing by two yields
\[\sin50^\circ\sin10^\circ=\frac12\cos40^\circ-\frac12\left(\frac12\right)=\boxed{\frac12\cos40^\circ-\frac14}.\]`),
  entry(26, "Parametric", 4, [],
    r`Consider the tricuspoid graph shown in the figure. This curve can be defined parametrically by
\[\begin{cases}x=2\cos(2t)+\cos(4t),\\y=2\sin(2t)-\sin(4t).\end{cases}\]
The given graph was created using all real values of \(t\). But Luciano graphs the curve over the restricted interval \(a\le t\le b\) and notes that the graph is identical. Find the least possible value of \(b-a\).`,
    [r`\(\frac\pi4\)`, r`\(\frac\pi2\)`, r`\(\pi\)`, r`\(2\pi\)`, "NOTA"], "C",
    r`Both coordinates repeat after \(t\) increases by \(\pi\). From \(t=0\) to \(t=\pi\), the curve is traced out once. To justify that a shorter interval cannot cover the entire curve, put \(u=e^{2it}\), so its complex coordinate is \(z=2u+u^{-2}\).

If distinct unit complex numbers \(u,v\) gave the same point, factoring their difference would give
\[(u-v)\left(2-\frac{u+v}{u^2v^2}\right)=0,\qquad 2u^2v^2=u+v.\]
The left side has modulus \(2\), whereas \(|u+v|<2\) for distinct unit complex numbers. This is impossible. Thus one complete turn of \(u\), corresponding to a \(t\)-interval of length \(\pi\), is required. Any interval of width \(\pi\) traces the curve once, and the least possible width is \(\boxed\pi\).`,
    { src: "/questions/alpha-january-statewide-2026-tricuspoid.svg", alt: "A three-cusped tricuspoid with one cusp on the positive horizontal axis and two cusps to the left, above and below the horizontal axis.", width: 360, height: 340 }),
  entry(27, "Logs and Exponents", 2, ["Exponential Limits"],
    r`Jack deposits $1000 in a savings account that pays 5% interest per year, compounded daily. If he makes no withdrawals or further deposits after his initial investment, then which of the following is closest to the amount of money, in dollars, that will be in the account after 10 years? (note: 5% is the nominal rate. It is a measure of how much interest Jack would earn after a year if no compounding took place)`,
    [r`\(1000\sqrt e\)`, r`\(1000(1.05)^{10}\)`, r`\(1000e^{73/40}\)`, "1500", "NOTA"], "A",
    r`Using a 365-day year, daily compounding gives
\[1000\left(1+\frac{0.05}{365}\right)^{365\cdot10}=1000\left(1+\frac1{7300}\right)^{3650}.\]
This is very close to continuous compounding:
\[1000e^{(0.05)(10)}=1000e^{1/2}=1000\sqrt e.\]
Option A is what the account would hold if interest were compounded continuously. Option B compounds yearly, while D corresponds to simple interest over the decade. Option C has a much larger exponent than \(\frac12\). Of the choices, continuous compounding is by far the best approximation: it differs from daily compounding by only a few cents, while B differs by about twenty dollars and C and D by hundreds or more. Thus the answer is A.`),
  entry(28, "Trigonometry", 4, ["Parity"],
    r`Let \(f(x)=4\cos(3x+\frac\pi6)+2\). The function \(f\) is neither even nor odd, but the function \(g(x)=f(x+p)+m\) is odd. There is a unique pair \((p,m)\) that results in the smallest possible positive value of \(p+m\). Find the \(p\) value of that pair.`,
    [r`\(\frac\pi9\)`, r`\(\frac{4\pi}9\)`, r`\(\frac{5\pi}9\)`, r`\(\frac{7\pi}9\)`, "NOTA"], "D",
    r`Write \(\phi=3p+\frac\pi6\). Then
\[g(x)=4\cos(3x+\phi)+2+m.\]
For oddness, \(g(x)+g(-x)=0\) for every \(x\). The addition identity gives
\[8\cos(3x)\cos\phi+4+2m=0.\]
Because \(\cos(3x)\) is not constant, this requires \(\cos\phi=0\) and \(m=-2\). Hence
\[3p+\frac\pi6=\frac\pi2+k\pi,\qquad p=\frac\pi9+\frac{k\pi}3\quad(k\in\mathbb Z).\]
These choices make \(g(x)=(-1)^{k+1}4\sin(3x)\), which is indeed odd. We need \(p+m=p-2>0\). The consecutive candidates \(\frac\pi9,\frac{4\pi}9,\frac{7\pi}9\) are respectively less than, less than, and greater than \(2\). Therefore the smallest eligible \(p\) is \(\boxed{\frac{7\pi}9}\).`),
  entry(29, "Logs and Exponents", 3, ["Substitution"],
    r`Consider the solutions to the following equation. The sum of the real solutions may be written as \((\log_k p)-k\) where \(k\) and \(p\) are prime integers. Find \(k^2+p^2\).
\[27^{x+1}-3^{x+3}=2(9^x-1).\]`,
    ["13", "18", "34", "58", "NOTA"], "A",
    r`Let \(A=3^x\), so \(A>0\). Rewriting in powers of \(3\) gives
\[27A^3-2A^2-27A+2=0.\]
This factors as \((A-1)(A+1)(27A-2)=0\). The root \(A=-1\) is impossible, while the other two give
\[x=0\quad\text{or}\quad x=\log_3\left(\frac2{27}\right)=\log_3 2-3.\]
Their sum is \(\log_3 2-3\), so \(k=3\), \(p=2\), and \(k^2+p^2=9+4=\boxed{13}\).`),
  entry(30, "Functions", 2, [],
    r`Let \(f(x)=8\csc(\frac{\pi x}{2}-\frac\pi3)+4\). Find an expression for the domain of \(f(x)\).`,
    [r`\(\{x\mid x\ne n-\frac13,\ n\in\mathbb Z\}\)`, r`\(\{x\mid x\ne n+\frac23,\ n\in\mathbb Z\}\)`, r`\(\{x\mid x\ne2n-\frac13,\ n\in\mathbb Z\}\)`, r`\(\{x\mid x\ne2n+\frac23,\ n\in\mathbb Z\}\)`, "NOTA"], "D",
    r`Cosecant is undefined at integer multiples of \(\pi\). Therefore we require
\[\frac{\pi x}{2}-\frac\pi3\ne n\pi\quad(n\in\mathbb Z).\]
Solving for the excluded values,
\[x\ne\frac2\pi\left(n\pi+\frac\pi3\right)=2n+\frac23.\]
Thus the domain is \(\boxed{\{x\in\mathbb R\mid x\ne2n+\frac23,\ n\in\mathbb Z\}}\).`),
];
