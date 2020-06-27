export enum Category {
	SYMBOLS,
	LETTERS,
	FUNCTIONS,
	SUPERSUBSCRIPTS,
	DELIMITERS,
	FRACTIONS,
	SUMPRODUCTS,
	DERIVATIVESINTEGRALS,
	ALIGN,
	MATRICES
}

// TODO Intégrales et dérivées

export const categoryNames: { [key in Category]: string } = {
	[Category.SYMBOLS]: 'Symboles',
	[Category.LETTERS]: 'Lettres',
	[Category.FUNCTIONS]: 'Fonctions',
	[Category.SUPERSUBSCRIPTS]: 'Indices et exposants',
	[Category.DELIMITERS]: 'Délimiteurs',
	[Category.FRACTIONS]: 'Fractions',
	[Category.SUMPRODUCTS]: 'Sommes et produits',
	[Category.DERIVATIVESINTEGRALS]: 'Dérivées et intégrales',
	[Category.ALIGN]: 'Alignements',
	[Category.MATRICES]: 'Matrices'
};

export const categoryQuestions: { [key in Category]: string[] } = {
	[Category.SYMBOLS]: [
		'1+1=2',
		'5-3=2',
		'2\\times3=6',
		'n!\\times(n+1)=(n+1)!',
		'f\\circ g',
		'f\\sim g',
		'a\\equiv b[c]',
		'E=F\\oplus G',
		'\\binom{n}{1}=n',
		'k\\binom{n}{k}=n\\binom{n-1}{k-1}',
		'\\lim_af',
		'E\\subset F',
		'x\\in E',
		'2\\leq e<3',
		'y\\notin F',
		'F\\not\\subset G'
	],
	[Category.LETTERS]: [
		'\\alpha+\\beta=\\gamma',
		'\\phi=\\tau\\circ\\sigma',
		'\\mathbb N\\subset\\mathbb Z\\subset\\mathbb Q\\subset\\mathbb R\\subset\\mathbb C',
		'\\mathcal C\\subset\\mathcal D',
		'x\\equiv\\pi[2\\pi]'
	],
	[Category.FUNCTIONS]: [
		'\\ln(ab)=\\ln(a)+\\ln(b)',
		'\\cos(a+b)=\\cos(a)\\cos(b)-\\sin(a)\\sin(b)',
		'\\exp(a+b)=e^ae^b'
	],
	[Category.SUPERSUBSCRIPTS]: [
		'x_1+x_2=x_3',
		'u_n+u_{n+1}=u_{n+2}',
		'a^2+b^2=c^2',
		'e^{i\\pi}=-1',
		'x^ny^n=(xy)^n',
		'2^{n+1}+2^{n+1}=2^{n+2}',
		'a_{i_j}b^{k_l}c_{n^2}',
		'3^{2^n}\\times3^{2^n}=3^{2^{n+1}}',
		'(a^b)^c=a^{bc}',
		'\\lim_{x\\to0}\\frac{\\sin x}{x}=1'
	],
	[Category.DELIMITERS]: [
		'\\left(a_i^j\\right)^2',
		'\\left\\{a^2+b^2,(a,b)\\in\\mathbb N^2\\right\\}',
		'\\mathbb Q=\\left\\{\\frac{a}{b},(a,b)\\in\\mathbb Z\\times\\mathbb N^*\\right\\}',
		'\\mathbb D=\\left\\{\\frac{a}{10^n},(a,n)\\in\\mathbb Z\\times\\mathbb N\\right\\}',
		'|a+b|\\leq|a|+|b|',
		'x-1<\\lfloor x\\rfloor\\leq x'
	],
	[Category.FRACTIONS]: [
		'\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}',
		'\\frac{a^2-b^2}{a^2+b^2}',
		'\\frac{1+\\frac{1}{2}}{1+\\frac{1}{3}}',
		'\\frac{1}{2}\\times\\frac{2}{3}\\times\\cdots\\times\\frac{n-1}{n}=\\frac{1}{n}',
		'\\frac{1}{2}\\times\\frac{3}{4}\\times\\cdots\\times\\frac{2n-1}{2n}=\\frac{(2n)!}{(2^nn!)^2}=\\frac{\\binom{2n}{n}}{4^n}',
		'\\tan(a-b)=\\frac{\\tan a-\\tan b}{1+\\tan a\\tan b}',
		''
	],
	[Category.SUMPRODUCTS]: [
		'\\sum_{k=1}^nk=\\frac{n(n+1)}{2}',
		'\\sum_{k=1}^nk^2=\\frac{n(n+1)(2n+1)}{6}',
		'\\sum_{k=1}^nx^k=\\frac{x^{n+1}-1}{x-1}',
		'(a+b)^n=\\sum_{k=0}^n\\binom{n}{k}a^kb^{n-k}',
		'a^n-b^n=(a-b)\\sum_{k=0}^{n-1}a^kb^{n-1-k}',
		'\\prod_{k=1}^nk=n!',
		'\\prod_{k=1}^n\\frac{2k-1}{2k}=\\frac{\\binom{2n}{n}}{4^n}',
		'E=\\bigoplus_{\\lambda\\in\\mathrm{Sp}(u)}\\mathrm{Ker}\\left(u-\\lambda\\mathrm{Id}_E\\right)'
	],
	[Category.ALIGN]: [
		'\\begin{aligned}x+y&=1\\\\z&=2\\end{aligned}',
		'\\left\\{\\begin{aligned}x_1+x_2&=1\\\\x_1-2x_2&=1\\end{aligned}\\right.',
		'\\begin{alignedat}{2}10x&+&3y &=2\\\\3x&+&13y&=4\\end{alignedat}',
		'\\begin{aligned}\\left|\\sum_{k=0}^n(a_k+b_k)\\right|&\\leq\\sum_{k=0}^n|a_k+b_k|\\\\&\\leq\\sum_{k=0}^n|a_k|+|b_k|\\end{aligned}'
	],
	[Category.DERIVATIVESINTEGRALS]: [
		'f\'(a)=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}',
		'\\int_0^1x^n\\mathrm{dx}=\\frac{1}{n+1}',
		'\\int_a^bu(t)v\'(t)\\mathrm{dt}=\\left[u(t)v(t)\\right]_a^b-\\int_a^be\'(t)v(t)\\mathrm{dt}',
		'\\sum_{k=0}^n\\int_{a_k}^{a_{k+1}}f(t)\\mathrm{dt}=\\int_{a_0}^{a_{n+1}}f(t)\\mathrm{dt}'
	],
	[Category.MATRICES]: [
		'\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}',
		'\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}',
		'\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}\\cdot\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}',
		'\\begin{pmatrix}a_{1,1}&\\cdots&a_{1,p}\\\\\\vdots& &\\vdots\\\\a_{n,1}&\\cdots&a_{n,p}\\end{pmatrix}',
		'I_n=\\begin{pmatrix}1&0&\\cdots&0\\\\0&\\ddots&\\ddots&\\vdots\\\\\\vdots&\\ddots&\\ddots&0\\\\0&\\cdots&0&1\\end{pmatrix}'
	]
};
