export enum Category {
    BASICS,
    SUPERSUBSCRIPTS,
    FRACTIONS,
    FUNCTIONS
};

export const categoryNames: { [key in Category]: string } = {
    [Category.BASICS]: "Basique",
    [Category.SUPERSUBSCRIPTS]: "Indices et exposants",
    [Category.FRACTIONS]: "Fractions",
    [Category.FUNCTIONS]: "Fonctions"
}

export const categoryQuestions: { [key in Category]: string[] } = {
    [Category.BASICS]: [
        "\\mathrm{dx}",
        "\\begin{aligned}x&=1\\\\y&=2\\end{aligned}"
    ],
    [Category.SUPERSUBSCRIPTS]: [
        "a^2+b^2=c^2",
        "x^n+y^n=z^n"
    ],
    [Category.FRACTIONS]: [
        "\\frac{a^2-b^2}{a^2+b^2}"
    ],
    [Category.FUNCTIONS]: [
        "\\sin(x)",
        "\\ln(x)"
    ]
}
