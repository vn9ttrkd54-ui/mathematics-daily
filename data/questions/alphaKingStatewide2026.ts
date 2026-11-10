import type { Question, QuestionIllustration } from "@/types/question";

const r = String.raw;
const circleContext = r`The line \(y=mx\) intersects \(x^2+y^2=1\) at two points: \((x_1,y_1)\) and \((x_2,y_2)\), where \(x_1>y_2>0\).`;
const differencesContext = r`Define the function \(f\) for all integral \(x\) such that \(f_n(x)=f_{n-1}(x+1)-f_{n-1}(x)\) for all positive integers \(n\).`;
const incircleContext = r`Time for everyone’s favorite subject, geometry! The following diagram (from Wolfram MathWorld) shows the incircle of a triangle. The inradius is \(r\) and the semiperimeter is defined as \(s=\frac{a+b+c}{2}\), where \(a,b,c\) are the side lengths of the triangle opposite to angles \(\angle A,\angle B,\angle C\) respectively. The area of any triangle is equal to \(rs\), which can be seen by summing the areas of the 3 triangles \(AIB,BIC,CIA\), using \(r\) as the height.`;
const incircle: QuestionIllustration = {
  src: "/questions/alpha-king-statewide-2026-incircle.svg",
  width: 640, height: 380,
  alt: "Triangle ABC with incenter I, inradius r, and perpendicular radii to tangency points M_A on BC, M_B on AC, and M_C on AB. Sides a, b, c are opposite A, B, C respectively.",
};
function entry(original: number, topic: string, difficulty: number, methods: string[], question: string, choices: string[], answer: Question["answer"], solution: string, illustration?: QuestionIllustration): Question {
  return { id: 20360 + original, number: 297 + original, division: "Alpha", topic, difficulty, methods,
    source: { competition: "2026 King February Statewide", event: "Precalculus Individual", questionNumber: original },
    question, choices, answer, solution, ...(illustration ? { illustration } : {}) };
}

export const alphaKingStatewide2026Questions: Question[] = [
  entry(1, "Algebra", 1, [],
    r`Define \(x\otimes y\) as \(\frac1x+\frac1y\). What is \((((1\otimes2)\otimes3)\otimes4)\otimes5\)?`,
    [r`\(\frac54\)`, "1", r`\(\frac{29}{20}\)`, r`\(\frac{137}{60}\)`, "NOTA"], "B",
    r`As we calculate the expressions 1 by 1, we notice a pattern: if we end on an odd number, the answer is 1. In this expression the calculations are
\[1\otimes2=1+\frac12=\frac32,\qquad \frac32\otimes3=\frac23+\frac13=1,\]
\[1\otimes4=1+\frac14=\frac54,\qquad \frac54\otimes5=\frac45+\frac15=\boxed1.\]
The parentheses require this left-to-right evaluation; no associativity is assumed.`),
  entry(2, "Geometry", 1, ["Law of Cosines"],
    r`Aaron draws a triangle during Speed round. The sides of the triangle are 4, 7, and 8. What type of triangle is this, classified by its angles?`,
    ["acute", "right", "obtuse", "a cute triangle :)", "NOTA"], "A",
    r`The sides form a triangle since \(4+7>8\). The largest angle is opposite the longest side, 8. Since \(4^2+7^2=65>64=8^2\), the Law of Cosines gives
\[\cos C=\frac{4^2+7^2-8^2}{2\cdot4\cdot7}=\frac1{56}>0.\]
Thus even the largest angle is less than \(90^\circ\), so all three angles are acute. The triangle is \(\boxed{\text{acute}}\).`),
  entry(3, "Analytic Geometry", 1, ["Symmetry"],
    circleContext + r` What is \(x_2^2+y_1^2\)?`,
    ["0", r`\(\frac12\)`, "1", r`\(\frac32\)`, "NOTA"], "C",
    r`By graphing and symmetry, the intersections are opposite ends of a diameter: \((x_2,y_2)=(-x_1,-y_1)\). This also follows by substituting \(y=mx\) into the circle to get \((1+m^2)x^2=1\), whose roots are opposites. Hence \(x_2^2=x_1^2\). Because \((x_1,y_1)\) lies on the unit circle,
\[x_2^2+y_1^2=x_1^2+y_1^2=\boxed1.\]`),
  entry(4, "Analytic Geometry", 1, ["Symmetry"],
    circleContext + r` What is \(x_1+y_1+x_2+y_2\)?`,
    ["0", r`\(\frac12\)`, "1", r`\(\frac32\)`, "NOTA"], "A",
    r`By graphing and symmetry, we see that \(x_1=-x_2\) and \(y_1=-y_2\): a line through the center meets a circle at antipodal points. Therefore
\[x_1+y_1+x_2+y_2=(x_1+x_2)+(y_1+y_2)=\boxed0.\]`),
  entry(5, "Analytic Geometry", 2, [],
    circleContext + r` Which interval contains all possible values of \(m\)?`,
    [r`\((0,1)\)`, r`\((1,\infty)\)`, r`\((-1,0)\)`, r`\((-\infty,-1)\)`, "NOTA"], "C",
    r`Use \(x_1>y_2>0\). The points are antipodal, so \(y_1=-y_2<0\). Since \(x_1>0\), the point \((x_1,y_1)\) is in the fourth quadrant and \(m=y_1/x_1<0\). Also \(|y_1|=y_2<x_1\), so \(|m|<1\). Thus \(-1<m<0\).
Conversely, any \(m\) in this interval gives \(x_1=1/\sqrt{1+m^2}\) and \(y_2=-m/\sqrt{1+m^2}\), which satisfy \(x_1>y_2>0\). The exact interval is \(\boxed{(-1,0)}\).`),
  entry(6, "Probability", 2, ["Conditional Probability"],
    r`Jiggy’s favorite month is January! Note that January has 31 days. Assume January 1 is equally likely to fall on any of the seven weekdays. Given that there are 5 Sundays in January in a certain year, what is the probability there are 5 Saturdays in the same month?`,
    [r`\(\frac37\)`, r`\(\frac47\)`, r`\(\frac13\)`, r`\(\frac23\)`, "NOTA"], "D",
    r`Sketching out a calendar, we can see that there will be 3 consecutive weekdays that appear 5 times, since \(31=4\cdot7+3\). These are the weekdays of January 1, 2, and 3. Given that Sunday appears 5 times, January 1 must be Friday, Saturday, or Sunday. Under the stated assumption these three cases are equally likely.
If January 1 is Friday, the extra days are Friday–Sunday; if it is Saturday, they are Saturday–Monday; if it is Sunday, they are Sunday–Tuesday. Saturday appears 5 times in the first two cases. Therefore the conditional probability is \(\boxed{\frac23}\).`),
  entry(7, "Number Theory", 2, ["Modular Arithmetic"],
    r`How many 4 digit perfect squares have the last 3 digits 025?`,
    ["0", "1", "2", "3", "NOTA"], "D",
    r`A 4 digit number with last 3 digits 025 can be represented by \(1000x+25\), where \(x\) is a positive integer in \([1,9]\). Then
\[1000x+25=25(40x+1).\]
Since 25 is a square, \(40x+1\) must also be a square. It lies between 41 and 361, so its positive square root is an integer from 7 to 19. Testing these roots for square congruent to 1 modulo 40 gives 9, 11, and 19, whose squares are 81, 121, and 361. These correspond to \(x=2,3,9\).
The three numbers are \(2025=45^2\), \(3025=55^2\), and \(9025=95^2\). The answer is \(\boxed3\).`),
  entry(8, "Systems of Equations", 1, [],
    r`Given
\[\begin{aligned}a+2b+3c&=4\\2a+3b+c&=5\\3a+b+2c&=6,\end{aligned}\]
what is \(a+b+c\)?`,
    [r`\(\frac52\)`, r`\(\frac56\)`, "1", "5", "NOTA"], "A",
    r`Summing all 3 equations gives
\[6a+6b+6c=4+5+6=15.\]
Therefore \(6(a+b+c)=15\), so \(a+b+c=\boxed{\frac52}\). There is no need to solve for the three variables separately.`),
  entry(9, "Logs and Exponents", 2, ["Change of Base"],
    r`Given
\[\begin{aligned}\log_a a+\log_b(2b)+\log_c(3c)&=4\\\log_a(2a)+\log_b(3b)+\log_c c&=5\\\log_a(3a)+\log_b b+\log_c(2c)&=6,\end{aligned}\]
what is \(\frac1{\log a}+\frac1{\log b}+\frac1{\log c}\)? All unsubscripted logs are in base 10.`,
    [r`\(12\log6\)`, r`\(\frac{12}{\log6}\)`, r`\(6\log6\)`, r`\(\frac6{\log6}\)`, "NOTA"], "D",
    r`Summing all 3 equations and combining logarithms with the same base gives
\[\log_a(6a^3)+\log_b(6b^3)+\log_c(6c^3)=15.\]
Each term is \(3+\log_a6\), \(3+\log_b6\), or \(3+\log_c6\), respectively. Hence
\[\log_a6+\log_b6+\log_c6=6.\]
By change of base,
\[\log6\left(\frac1{\log a}+\frac1{\log b}+\frac1{\log c}\right)=6.\]
Dividing by the nonzero number \(\log6\) gives \(\boxed{\frac6{\log6}}\). The original logarithms require positive bases different from 1, so these divisions are valid.`),
  entry(10, "Geometry", 2, ["Law of Sines"],
    r`The angles of a triangle follow an arithmetic sequence with common difference \(15^\circ\). If the smallest side has a length of 1, what is the length of the largest side?`,
    [r`\(\frac{\sqrt6}{2}\)`, r`\(\frac{\sqrt3+1}{2}\)`, r`\(\sqrt3-\frac12\)`, r`\(\sqrt6\)`, "NOTA"], "B",
    r`Let the angles be \(x-15^\circ,x,x+15^\circ\). Summing the angles, we find \(3x=180^\circ\), or \(x=60^\circ\). So we have a 45–60–75 triangle. The smallest side is opposite \(45^\circ\), and the largest side is opposite \(75^\circ\). By the Law of Sines its length is
\[\frac{\sin75^\circ}{\sin45^\circ}=\frac{\sin(45^\circ+30^\circ)}{\sqrt2/2}=\frac{(\sqrt6+\sqrt2)/4}{\sqrt2/2}=\boxed{\frac{\sqrt3+1}{2}}.\]
Equivalently, draw an altitude splitting the \(75^\circ\) angle into \(45^\circ\) and \(30^\circ\). The resulting special right triangles split the longest side into lengths \(\sqrt3/2\) and \(1/2\), giving the same sum.`),
  entry(11, "Vectors", 2, ["Symmetry"],
    r`Julian is running evasive maneuvers to get out of English class, but he can only turn \(60^\circ\) clockwise. He runs 3 meters, turns, runs 4 meters, turns, runs 2 meters, turns, runs 4 meters, turns, runs 2 meters, turns, and then runs 4 meters. How far is Julian from his original position?`,
    ["0", "1", r`\(2\sqrt3\)`, r`\(1+4\sqrt3\)`, "NOTA"], "B",
    r`Draw a symmetric equiangular hexagon with sides alternating 2,4,2,4,2,4. If the first step were 2 meters, these six moves would return to the starting point. To verify this, choose the initial direction as the positive horizontal axis. The six direction angles are \(0^\circ,-60^\circ,-120^\circ,-180^\circ,-240^\circ,-300^\circ\). The horizontal displacements sum to
\[2+2-1-4-1+2=0,\]
and the vertical displacements sum to
\[-2\sqrt3-\sqrt3+0+\sqrt3+2\sqrt3=0.\]
The actual first step is 3 meters, not 2, so it adds exactly 1 meter in the initial direction. Julian finishes \(\boxed1\) meter from his original position.`),
  entry(12, "Complex Numbers", 2, ["Conjugates"],
    r`Derek is reviewing complex numbers, after a year of competing in Statistics. Evaluate the expression
\[\frac{(1+2i)^5(2+i)^4}{(1-2i)^3(2-i)^4}.\]`,
    ["5", r`\(-5\)`, r`\(4+3i\)`, r`\(4-3i\)`, "NOTA"], "A",
    r`Group four copies of each factor, leaving a conjugate pair outside:
\[\frac{(1+2i)^5(2+i)^4}{(1-2i)^3(2-i)^4}=\left(\frac{(1+2i)(2+i)}{(1-2i)(2-i)}\right)^4(1+2i)(1-2i).\]
The numerator inside the parentheses is \(5i\) and its denominator is \(-5i\). Also \((1+2i)(1-2i)=1+4=5\). Therefore the expression is \((-1)^4\cdot5=\boxed5\).`),
  entry(13, "Trigonometry", 3, ["Trigonometric Identities"],
    r`Suppose \(\sin(a+b)=\frac45\) and \(\sin(a)\sin(b)=\frac1{10}\). If \(0<b<a<\frac\pi2\), what is \(\sin(a-b)\)?`,
    [r`\(\frac15\)`, r`\(\frac25\)`, r`\(\frac35\)`, r`\(\frac45\)`, "NOTA"], "C",
    r`To use \(\sin(a)\sin(b)=1/10\), consider the cosine addition and subtraction formulas:
\[\cos(a-b)=\cos(a+b)+2\sin a\sin b=\cos(a+b)+\frac15.\]
Since \(\sin(a+b)=4/5\), the Pythagorean identity gives \(\cos(a+b)=\pm3/5\). However, \(0<a-b<\pi/2\), so \(\cos(a-b)>0\). The negative choice would give \(\cos(a-b)=-3/5+1/5=-2/5<0\), a contradiction. Thus \(\cos(a+b)=3/5\) and \(\cos(a-b)=4/5\).
Finally \(\sin(a-b)>0\), so \(\sin(a-b)=\sqrt{1-(4/5)^2}=\boxed{\frac35}\).`),
  entry(14, "Sequences and Series", 2, ["Telescoping"],
    r`Evaluate
\[\sum_{k=5}^{19}\left(k^2+k(k+1)+(k+1)^2\right).\]
Hint: please don’t bash.`,
    ["7375", "7875", "7975", "8000", "NOTA"], "B",
    r`Recognize that this expression mirrors \(a^3-b^3=(a-b)(b^2+ba+a^2)\), where \(a=k+1\) and \(b=k\). Since \(a-b=1\),
\[k^2+k(k+1)+(k+1)^2=(k+1)^3-k^3.\]
Therefore the sum telescopes:
\[(6^3-5^3)+(7^3-6^3)+\cdots+(20^3-19^3)=20^3-5^3=8000-125=\boxed{7875}.\]`),
  entry(15, "Trigonometry", 2, ["Double-Angle Identity", "Difference of Squares"],
    r`If \(\cos^4\theta+\sin^4\theta=\frac{17}{25}\), what is a possible value of \(\cos^4\theta-\sin^4\theta\)?`,
    [r`\(\frac35\)`, r`\(\frac45\)`, r`\(\frac7{25}\)`, r`\(\frac{24}{25}\)`, "NOTA"], "A",
    r`By difference of squares,
\[\cos^4\theta-\sin^4\theta=(\cos^2\theta+\sin^2\theta)(\cos^2\theta-\sin^2\theta)=\cos2\theta.\]
Also
\[1=(\cos^2\theta+\sin^2\theta)^2=\frac{17}{25}+2\sin^2\theta\cos^2\theta,\]
so \(\sin^22\theta=4\sin^2\theta\cos^2\theta=16/25\). Hence \(\cos^22\theta=9/25\), giving \(\cos2\theta=\pm3/5\). Both signs can occur; among the listed answers, the possible value is \(\boxed{\frac35}\). We do not need to assume a sign for \(\sin2\theta\).`),
  entry(16, "Geometry", 3, ["Pythagorean Theorem"],
    r`A trapezoid has parallel bases 8 and 16, with the other two sides 7 and 9. Its area can be represented as \(m\sqrt n\), where \(n\) is square-free and \(m\) and \(n\) are integers. What is \(m+n\)?`,
    ["24", "29", "36", "41", "NOTA"], "D",
    r`Draw the trapezoid, with the larger base on the bottom, 7 on the left, and 9 on the right. Drop two altitudes, with height \(h\), from the endpoints of the smaller base down to the larger base, splitting it into segments \(a,8,b\). Then \(a+b=8\). By the Pythagorean Theorem,
\[a^2+h^2=49,\qquad b^2+h^2=81.\]
Subtracting gives \((b+a)(b-a)=32\), so \(b-a=4\). Together with \(a+b=8\), this gives \(a=2,b=6\). Both are positive, confirming that the altitude feet lie on the larger base as drawn.
Then \(h=\sqrt{49-4}=3\sqrt5\). The area is
\[\frac{8+16}{2}\cdot3\sqrt5=36\sqrt5.\]
Thus \(m+n=36+5=\boxed{41}\).`),
  entry(17, "Trigonometry", 3, ["Sum-to-Product Identity"],
    r`If \(\cos\phi=\frac14\), what is the maximum value of \(\sin(\theta)+\sin(\theta+2\phi)+\cos(\theta)+\cos(\theta+2\phi)\) over all possible angles \(\theta\)?`,
    [r`\(2\sqrt2\)`, "2", r`\(\sqrt2\)`, r`\(\frac{\sqrt2}{2}\)`, "NOTA"], "D",
    r`We can introduce symmetry to solve this faster: let \(x=\theta+\phi\). The expression becomes
\[\sin(x-\phi)+\sin(x+\phi)+\cos(x-\phi)+\cos(x+\phi).\]
The sine and cosine addition formulas give
\[2\sin x\cos\phi+2\cos x\cos\phi=2\cos\phi(\sin x+\cos x)=\frac12(\sin x+\cos x).\]
Now \(\sin x+\cos x=\sqrt2\sin(x+\pi/4)\), which has maximum \(\sqrt2\). Since \(\theta\) can vary freely, so can \(x\), and this maximum is attained at \(x=\pi/4\) modulo \(2\pi\). The requested maximum is \(\boxed{\frac{\sqrt2}{2}}\).`),
  entry(18, "Number Theory", 3, ["Modular Arithmetic"],
    r`Freddy takes a positive integer \(x\), multiplies it by 7, and adds one, and gets a square number that is less than 2025. What is the sum of all possible values of \(x\)?`,
    ["294", "980", "1274", "2940", "NOTA"], "C",
    r`Write \(7x+1=y^2\), with \(y\) a positive integer less than 45. Testing the residues modulo 7 shows that \(y^2\equiv1\pmod7\) holds only for \(y\equiv\pm1\pmod7\). The value \(y=1\) gives \(x=0\), which is excluded. All remaining possibilities pair as
\[y=7k-1,\quad y=7k+1,\qquad k=1,2,\ldots,6.\]
For each pair, the corresponding values of \(x\) sum to
\[\frac{(7k-1)^2-1}{7}+\frac{(7k+1)^2-1}{7}=14k^2.\]
Thus the desired sum is
\[14(1^2+2^2+3^2+4^2+5^2+6^2)=14\cdot91=\boxed{1274}.\]`),
  entry(19, "Geometry", 3, ["Double-Angle Identity"],
    r`A right triangle \(ABC\) has area of 60. If \(\sin(2A)+\sin(2B)+\sin(2C)=\frac32\), what is the area of the circumcircle of triangle \(ABC\)?`,
    [r`\(60\pi\)`, r`\(\frac{289\pi}{4}\)`, r`\(80\pi\)`, r`\(90\pi\)`, "NOTA"], "C",
    r`Without loss of generality, assume \(C\) is the right angle and \(c\) is the hypotenuse. The legs are \(c\sin A\) and \(c\cos A\), so
\[60=\frac12c^2\sin A\cos A=\frac{c^2\sin2A}{4}.\]
Also \(B=90^\circ-A\), so \(\sin2B=\sin2A\), while \(\sin2C=0\). The given identity therefore implies \(2\sin2A=3/2\), or \(\sin2A=3/4\). Consequently \(c^2=4\cdot60/(3/4)=320\).
The hypotenuse is the diameter of the circumcircle. Its area is therefore \(\pi(c/2)^2=320\pi/4=\boxed{80\pi}\).`),
  entry(20, "Logs and Exponents", 3, ["Geometric Series"],
    r`Evaluate
\[\sum_{0\le i,j\le10}\log_{2^{2^j}}\left(\left(2^{2^{10}}\right)^{2^i}\right).\]`,
    [r`\(2^{20}-1\)`, r`\((2^{10}-1)^2\)`, r`\(2^{22}-1\)`, r`\((2^{11}-1)^2\)`, "NOTA"], "D",
    r`Change to base 2. Each summand becomes
\[\frac{\log_2((2^{2^{10}})^{2^i})}{\log_2(2^{2^j})}=\frac{2^i2^{10}}{2^j}=2^i2^{10-j}.\]
Since \(i\) and \(j\) vary independently, the double sum factors:
\[\left(\sum_{i=0}^{10}2^i\right)\left(\sum_{j=0}^{10}2^{10-j}\right).\]
Both geometric sums equal \(1+2+\cdots+2^{10}=2^{11}-1\), so the result is \(\boxed{(2^{11}-1)^2}\).`),
  entry(21, "Functions", 4, ["Inverse Functions"],
    r`Aiden writes down the following equation: \(e^{x/3}=3\ln x\). If the sum of the roots is \(s\) and the product of the roots is \(p\), which of the following equations is true?`,
    [r`\(e^{3s}=p\)`, r`\(e^{3s}=9p\)`, r`\(e^{s/3}=9p\)`, r`\(e^{s/3}=p\)`, "NOTA"], "D",
    r`The functions \(f(x)=e^{x/3}\) and \(f^{-1}(x)=3\ln x\) are inverses, and \(f\) is strictly increasing. We must justify why their intersections lie on \(y=x\): if \(f(x)=f^{-1}(x)=y\), then \(f(y)=x\). If \(x<y\), monotonicity would give \(y=f(x)<f(y)=x\), a contradiction. The case \(x>y\) gives the opposite contradiction. Thus \(x=y\), and every root satisfies \(x=e^{x/3}\).
There are exactly two such roots. Indeed, \(h(x)=e^{x/3}-x\) is strictly convex, decreases until \(x=3\ln3\), then increases; it is positive at 0, negative at 3, and tends to infinity as \(x\to\infty\). Both roots are positive, so the logarithm is defined. Conversely every fixed point also satisfies \(3\ln x=x\), hence solves the original equation.
Let the roots be \(a,b\). Multiplying \(a=e^{a/3}\) and \(b=e^{b/3}\) gives
\[p=ab=e^{(a+b)/3}=\boxed{e^{s/3}}.\]`),
  entry(22, "Geometry", 2, ["Tangency"],
    incircleContext + r`

Using the notation from the diagram, what is the length of line segment \(AM_B\)?`,
    [r`\(s-a\)`, r`\(s-b\)`, r`\(s-c\)`, r`\(a+b-c\)`, "NOTA"], "A",
    r`Tangent segments from the same point to a circle are equal. This follows, for example, because the right triangles \(AIM_B\) and \(AIM_C\) have common hypotenuse \(AI\) and equal radii \(IM_B=IM_C\). Let
\[x=AM_B=AM_C,\quad y=BM_C=BM_A,\quad z=CM_A=CM_B.\]
We obtain the system \(y+z=a,\ x+z=b,\ x+y=c\). Summing and dividing by two gives \(x+y+z=s\). Subtracting \(y+z=a\), we get \(x=\boxed{s-a}\).`, incircle),
  entry(23, "Geometry", 4, ["Reflection", "Tangency"],
    incircleContext + r`

A triangle with sides 3, 4, and 5 is reflected over one of its sides to form a larger polygon. What is the maximum radius of the largest circle that can be inscribed inside this new polygon?`,
    [r`\(\frac43\)`, r`\(\frac32\)`, r`\(\frac{12}{7}\)`, "2", "NOTA"], "C",
    r`For any convex polygon with a circle of radius \(r\) inside it, join the circle’s center to each vertex. If the side lengths are \(L_j\) and the perpendicular distances from the center to their supporting lines are \(d_j\), then
\[\text{area}=\frac12\sum L_jd_j\ge\frac r2\sum L_j=r\cdot\text{semiperimeter}.\]
Equality holds when the circle is tangent to every side. Thus an incircle attaining area divided by semiperimeter is a largest possible circle.
Every reflection doubles the triangle’s area from 6 to 12. Reflecting over the leg of length 3 produces an isosceles triangle with sides 5,5,8, whose inradius is \(12/9=4/3\). Reflecting over the leg of length 4 produces sides 5,5,6, with inradius \(12/8=3/2\).
Reflecting over the hypotenuse produces a convex kite with sides 3,4,4,3 and semiperimeter 7. To construct its incircle, place the original right triangle at \((0,0),(3,0),(0,4)\). A center equidistant from the legs has coordinates \((r,r)\). Requiring that center to lie on the shared hypotenuse gives
\[\frac r3+\frac r4=1,\qquad r=\frac{12}{7}.\]
Its perpendicular feet lie on both legs. Reflection across the hypotenuse fixes the center and supplies tangency to the two other sides, so this circle really is an incircle. Its radius exceeds both other cases. Therefore the maximum is \(\boxed{\frac{12}{7}}\).`, incircle),
  entry(24, "Geometry", 3, ["Tangency", "Pythagorean Theorem"],
    incircleContext + r`

Circles \(o,p,q\) are externally tangent to each other, with circle \(o\) being centered at \(O\) and having radius 3, circle \(p\) being centered at \(P\) and having radius 4, and circle \(q\) being centered at \(Q\) and having radius 5. If the incenter of triangle \(OPQ\) is \(I\), what is \(2QI^2-OI^2-PI^2\)?`,
    ["12", "24", "25", "35", "NOTA"], "C",
    r`External tangency gives \(OP=3+4=7\), \(OQ=3+5=8\), and \(PQ=4+5=9\). The triangle’s semiperimeter is 12. Equal tangent segments to its incircle therefore have lengths \(12-9=3\) from \(O\), \(12-8=4\) from \(P\), and \(12-7=5\) from \(Q\).
Let the inradius be \(r\). A radius to a tangency point is perpendicular to its side. Applying the Pythagorean Theorem to each vertex–incenter–tangency-point triangle gives
\[OI^2=r^2+3^2,\quad PI^2=r^2+4^2,\quad QI^2=r^2+5^2.\]
Consequently
\[2QI^2-OI^2-PI^2=2(r^2+25)-(r^2+9)-(r^2+16)=\boxed{25}.\]
These tangent lengths also show that the incircle’s tangency points coincide with the original circles’ tangency points: on each center-to-center side, both points divide it into the same two radii.`, incircle),
  entry(25, "Geometry", 3, ["Heron's Formula", "Half-Angle Identity"],
    incircleContext + r`

The sides of a triangle are \(a,b,c\). The semiperimeter \(s=\frac{a+b+c}{2}\). If \(C\) is the angle opposite to side \(c\), what is \(\sqrt{\frac{s(s-c)}{(s-a)(s-b)}}\)?`,
    [r`\(\tan C\)`, r`\(\cot(\frac C2)\)`, r`\(\csc C+\sec C\)`, r`\(\sec C+\tan C\)`, "NOTA"], "B",
    r`Geometry solution (credit Vignesh Saravanan): By Heron’s formula, the area is \(\Delta=\sqrt{s(s-a)(s-b)(s-c)}\). All the factors are positive for a nondegenerate triangle, so
\[\sqrt{\frac{s(s-c)}{(s-a)(s-b)}}=\frac{s(s-c)}\Delta=\frac{s(s-c)}{rs}=\frac{s-c}{r}.\]
In the diagram, \(CM_B=s-c\), \(IM_B=r\), and the incenter lies on the angle bisector, so \(\angle ICM_B=C/2\). Right-triangle trigonometry gives \((s-c)/r=\boxed{\cot(C/2)}\).
Algebra solution: The Law of Cosines gives
\[\frac{s(s-c)}{(s-a)(s-b)}=\frac{(a+b)^2-c^2}{c^2-(a-b)^2}=\frac{2ab(1+\cos C)}{2ab(1-\cos C)}.\]
The half-angle identities turn this into \(\cot^2(C/2)\). Since \(0<C/2<\pi/2\), its positive square root is \(\cot(C/2)\), agreeing with the geometry solution.`, incircle),
  entry(26, "Complex Numbers", 4, [],
    r`Oh no! Jerry is stuck on the complex plane inside the region bounded by the graphs of \(|z-2|=2\), \(ze^{\pi i/8}=\overline{ze^{\pi i/8}}\), and \(ze^{-\pi i/8}=\overline{ze^{-\pi i/8}}\). Take the region inside the circle between the rays \(\arg z=-\pi/8\) and \(\arg z=\pi/8\). What is the area of this region? (Note that \(\overline x\) denotes the complex conjugate of \(x\).)`,
    [r`\(\sqrt2+\pi\)`, r`\(2\sqrt2+\pi\)`, r`\(\sqrt2+\sqrt6+\pi\)`, r`\(\frac{\sqrt2+\sqrt6}{2}+\pi\)`, "NOTA"], "B",
    r`If \(w=\overline w\), its imaginary part is zero, so the graph is the real axis. Thus \(ze^{\pi i/8}=\overline{ze^{\pi i/8}}\) is the line obtained by rotating the real axis clockwise by \(\pi/8\); the other equation gives its counterclockwise rotation. The indicated region is the central wedge inside the circle.
Label the origin \(O\), the circle’s center \(P=(2,0)\), and the nonzero intersections of the two rays with the circle \(A,B\). Since \(OP=PA=PB=2\), the triangles \(OPA,OPB\) are isosceles. Each has angle \(\pi/8\) at \(O\), hence angle \(3\pi/4\) at \(P\). The remaining angle between \(PA\) and \(PB\), on the side away from \(O\), is \(2\pi-2(3\pi/4)=\pi/2\).
The region splits into sector \(APB\) and triangles \(OPA,OPB\). Their total area is
\[\frac12(2^2)\frac\pi2+2\left(\frac12\cdot2\cdot2\sin\frac{3\pi}4\right)=\boxed{\pi+2\sqrt2}.\]`),
  entry(27, "Polynomials", 2, [],
    differencesContext + r` Given that \(f_0(x)=x^3\), what is the minimum nonnegative integer \(d\) such that \(f_d(x)\) is constant?`,
    ["1", "2", "3", "4", "NOTA"], "C",
    r`This question explores finite differences, where the degree decreases by 1 each time. Compute the differences explicitly:
\[\begin{aligned}f_1(x)&=(x+1)^3-x^3=3x^2+3x+1,\\f_2(x)&=[3(x+1)^2+3(x+1)+1]-(3x^2+3x+1)=6x+6,\\f_3(x)&=[6(x+1)+6]-(6x+6)=6.\end{aligned}\]
The first three polynomials \(f_0,f_1,f_2\) are nonconstant even on the integers, while \(f_3\) is constant. Thus the minimum is \(\boxed3\).`),
  entry(28, "Polynomials", 2, [],
    differencesContext + r` Given that \(f_0(x)=2x^6+x^5+2x+1\), what is the minimum nonnegative integer \(d\) such that \(f_d(x)\) is constant?`,
    ["4", "5", "6", "7", "NOTA"], "C",
    r`For a polynomial \(P(x)=ax^n+\) lower-degree terms, with \(n\ge1\) and \(a\ne0\), the binomial theorem gives
\[P(x+1)-P(x)=anx^{n-1}+\text{lower-degree terms}.\]
The \(x^n\) terms cancel, but the leading \(x^{n-1}\) term is nonzero. Therefore every finite difference lowers the degree by exactly 1. Starting from degree 6, the degrees are 6,5,4,3,2,1,0, so \(f_6\) is the first constant polynomial. In fact its value is \(2\cdot6!=1440\); all the lower-degree terms have vanished. The minimum is \(\boxed6\).`),
  entry(29, "Polynomial Equations", 3, ["Roots of Unity"],
    r`Tiger needs help on an algebra problem! If \(\frac{x^6-1}{x^3+2x^2+2x+1}=0\), allowing complex values of \(x\), what is the sum of all possible values of \(x^3+2x^2+2x+1\)?`,
    ["0", "2", "4", "6", "NOTA"], "D",
    r`The original denominator must be nonzero. Factor:
\[x^3+2x^2+2x+1=(x+1)(x^2+x+1),\]
\[x^6-1=(x+1)(x^2+x+1)(x-1)(x^2-x+1).\]
After cancellation the numerator condition is \((x-1)(x^2-x+1)=0\), still with the original exclusions. Thus the allowable values are \(1\) and the two roots \(u,v\) of \(x^2-x+1=0\). None is a zero of the original denominator.
At \(x=1\), the denominator’s value is 6. At \(x=u,v\), use \(x^2=x-1\) and \(x^3=-1\) to obtain
\[x^3+2x^2+2x+1=4x-2.\]
Since \(u+v=1\), the two latter values sum to \(4(u+v)-4=0\). Therefore all distinct possible denominator values sum to \(6+0=\boxed6\).`),
  entry(30, "Trigonometry", 4, ["Product-to-Sum Identity"],
    r`Andrew writes down the following expression on Mr. Frazer’s whiteboard:
\[2\left(\sum_{n=1}^{5}\cos n\right)\left(\sum_{n=1}^{5}\sin n\right)=\sum_{n=1}^{10}a_n\sin n.\]
where \(a_n\) are integers. Evaluate \(\sum_{n=1}^{10}na_n\).`,
    ["100", "120", "125", "150", "NOTA"], "D",
    r`Expand the product using \(2\cos j\sin k=\sin(k+j)+\sin(k-j)\):
\[\sum_{j=1}^5\sum_{k=1}^5\bigl(\sin(k+j)+\sin(k-j)\bigr).\]
The difference terms cancel in pairs, because interchanging \(j,k\) replaces \(\sin(k-j)\) with its negative; terms with \(j=k\) are zero. What remains is \(\sum_{j,k=1}^5\sin(j+k)\). Thus \(a_n\) counts ordered pairs with \(j+k=n\), yielding
\[(a_1,a_2,\ldots,a_{10})=(0,1,2,3,4,5,4,3,2,1).\]
Instead of weighting these individually, sum the values \(j+k\) over all 25 ordered pairs:
\[\sum_{n=1}^{10}na_n=\sum_{j=1}^5\sum_{k=1}^5(j+k)=5(1+2+3+4+5)+5(1+2+3+4+5)=\boxed{150}.\]`),
];
