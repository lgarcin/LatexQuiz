export enum Category {
	BASICS,
	LETTERS,
	FUNCTIONS,
	SUPERSUBSCRIPTS,
	DELIMITERS,
	FRACTIONS,
	SUMPRODUCTS,
	ALIGN,
	MATRICES
}

// TODO Intégrales et dérivées

export const categoryNames: { [key in Category]: string } = {
	[Category.BASICS]: 'Basique',
	[Category.LETTERS]: 'Lettres',
	[Category.FUNCTIONS]: 'Fonctions',
	[Category.SUPERSUBSCRIPTS]: 'Indices et exposants',
	[Category.DELIMITERS]: 'Délimiteurs',
	[Category.FRACTIONS]: 'Fractions',
	[Category.SUMPRODUCTS]: 'Sommes et produits',
	[Category.ALIGN]: 'Alignements',
	[Category.MATRICES]: 'Matrices'
};

export const categoryQuestions: { [key in Category]: string[] } = {
	[Category.BASICS]: [
		'1+1=2',
		'5-3=2',
		'2\\times3=6',
		'a+b=c',
		'f\\circ g',
		'a\\equiv b[c]',
		'n!\\times(n+1)=(n+1)!'
	],
	[Category.LETTERS]: [
		'\\alpha+\\beta=\\gamma',
		'\\phi=\\tau\\circ\\sigma',
		'\\mathbb N\\subset\\mathbb Z\\subset\\mathbb Q\\subset\\mathbb R\\subset\\mathbb C'
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
		'x^ny^n=(xy)^n',
		'2^{n+1}+2^{n+1}=2^{n+2}',
		'a_{i_j}b^{k_l}c_{n^2}',
		'3^{2^n}\\times3^{2^n}=3^{2^{n+1}}',
		'(a^b)^c=a^{bc}'
	],
	[Category.DELIMITERS]: [
		'\\left(a_i^j\\right)^2',
		'\\left\\{a^2+b^2,(a,b)\\in\\mathbb N^2\\right\\}'
	],
	[Category.FRACTIONS]: [
		'\\frac{a}{b}',
		'\\frac{a^2-b^2}{a^2+b^2}',
		'\\frac{1+\\frac{1}{2}}{1+\\frac{1}{3}}',
		'\\frac{1}{2}\\times\\frac{2}{3}\\times\\cdots\\times\\frac{n-1}{n}=\\frac{1}{n}',
		'\\frac{1}{2}\\times\\frac{3}{4}\\times\\cdots\\times\\frac{2n-1}{2n}=\\frac{(2n)!}{(2^nn!)^2}=\\frac{\\binom{2n}{n}}{4^n}'
	],
	[Category.SUMPRODUCTS]: [
		'\\sum_{k=1}^nx_ky^k',
		'\\sum_{k=1}^nk=\\frac{n(n+1)}{2}',
		'\\sum_{k=1}^nx^k=\\frac{x^{n+1}-1}{x-1}',
		'\\prod_{k=1}^nk=n!'
	],
	[Category.ALIGN]: [
		'\\begin{aligned}x+y&=1\\\\z&=2\\end{aligned}',
		'\\left\\{\\begin{aligned}x_1+x_2&=1\\\\x_1-2x_2&=1\\end{aligned}\\right.',
		'\\begin{alignedat}{2}10x&+&3y &=2\\\\3x&+&13y&=4\\end{alignedat}'
	],
	[Category.MATRICES]: [
		'\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}',
		'\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}',
		'\\begin{pmatrix}a_{1,1}&\\cdots&a_{1,p}\\\\\\vdots& &\\vdots\\\\a_{n,1}&\\cdots&a_{n,p}\\end{pmatrix}',
		'I_n=I_n=\\begin{pmatrix}1&0&\\cdots&0\\\\0&\\ddots&\\ddots&\\vdots\\\\\\vdots&\\ddots&\\ddots&0\\0&\\cdots&0&1\\end{pmatrix}'
	]
};
