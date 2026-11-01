const levelsData = {
  college: {
    label: "Collège",
    classes: ["6e", "5e", "4e", "3e"],
    courses: [
      {
        id: "arith-college",
        title: "Arithmétique & PGCD",
        subtitle: "Divisibilité, nombres premiers, multiples, PGCD",
        count: "12 exercices",
        description: "Ce chapitre permet de maîtriser les nombres entiers, les diviseurs, les multiples et le calcul du PGCD.",
        content: `
          <h4 class="text-lg font-bold text-white">1. Divisibilité</h4>
          <p>Un nombre entier a est divisible par b si le reste de la division euclidienne de a par b est nul.</p>
          <p class="mt-2">Exemple : 24 est divisible par 6, car 24 ÷ 6 = 4.</p>

          <div class="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 my-4">
            <p class="text-xs uppercase tracking-[0.18em] text-sky-400 mb-2">Exemple</p>
            <p class="font-mono text-sky-300">24 = 6 × 4</p>
          </div>

          <h4 class="text-lg font-bold text-white mt-4">2. PGCD</h4>
          <p>Le PGCD de deux entiers est le plus grand entier qui divise les deux nombres.</p>
          <p class="mt-2">Exemple : PGCD(24, 36) = 12.</p>

          <h4 class="text-lg font-bold text-white mt-4">3. Règle clé</h4>
          <p>On recherche les facteurs communs avec leur plus petite puissance pour obtenir le PGCD.</p>
        `
      },
      {
        id: "eq-college",
        title: "Équations du 1er degré",
        subtitle: "Résolution d’équations simples",
        count: "15 exercices",
        description: "Ce chapitre traite de la résolution d’équations comportant une inconnue, avec manipulation des égalités.",
        content: `
          <h4 class="text-lg font-bold text-white">1. Principe</h4>
          <p>Pour résoudre une équation, on isole l’inconnue en appliquant les mêmes opérations de part et d’autre du signe égal.</p>

          <div class="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 my-4">
            <p class="text-xs uppercase tracking-[0.18em] text-sky-400 mb-2">Exemple</p>
            <p class="font-mono text-sky-300">2x + 5 = 15</p>
            <p class="font-mono text-sky-300 mt-2">2x = 10</p>
            <p class="font-mono text-sky-300 mt-2">x = 5</p>
          </div>

          <h4 class="text-lg font-bold text-white mt-4">2. Règle importante</h4>
          <p>On retranche ou ajoute le même nombre aux deux membres pour garder l’égalité.</p>
        `
      },
      {
        id: "pythagore-college",
        title: "Pythagore & trigonométrie",
        subtitle: "Triangles rectangles, côtés et angles",
        count: "10 exercices",
        description: "Gestion des triangles rectangles et découverte des relations métriques fondamentales.",
        content: `
          <h4 class="text-lg font-bold text-white">1. Théorème de Pythagore</h4>
          <p>Dans un triangle rectangle, le carré de l’hypoténuse est égal à la somme des carrés des deux autres côtés.</p>
          <p class="mt-2 font-mono text-emerald-300">AC² = AB² + BC²</p>

          <h4 class="text-lg font-bold text-white mt-4">2. Trigonométrie</h4>
          <p>Dans un triangle rectangle, on relie les côtés et les angles à travers le sinus, le cosinus et la tangente.</p>
        `
      }
    ]
  },

  lycee: {
    label: "Lycée",
    classes: ["Seconde", "Première", "Terminale"],
    courses: [
      {
        id: "second-degree-lycee",
        title: "Second degré",
        subtitle: "Discriminant, racines, factorisation",
        count: "18 exercices",
        description: "Étude des fonctions polynomiales du second degré, du discriminant et de leurs solutions.",
        content: `
          <h4 class="text-lg font-bold text-white">1. Forme générale</h4>
          <p>On écrit une équation du second degré sous la forme ax² + bx + c = 0.</p>

          <div class="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 my-4">
            <p class="text-xs uppercase tracking-[0.18em] text-sky-400 mb-2">Formule</p>
            <p class="font-mono text-sky-300">Δ = b² - 4ac</p>
          </div>

          <h4 class="text-lg font-bold text-white mt-4">2. Signification</h4>
          <p>Le discriminant permet de déterminer le nombre de solutions réelles.</p>
        `
      },
      {
        id: "fonctions-lycee",
        title: "Fonctions",
        subtitle: "Variations, limites et tableau de signes",
        count: "16 exercices",
        description: "Apprentissage des fonctions, des variations et des signes à partir d’un graphe ou d’une formule.",
        content: `
          <h4 class="text-lg font-bold text-white">1. Domaine de définition</h4>
          <p>La fonction n’existe pas pour les valeurs qui rendent une expression non définie.</p>

          <h4 class="text-lg font-bold text-white mt-4">2. Tableau de signes</h4>
          <p>Il permet d’identifier les intervalles où la fonction est positive ou négative.</p>
        `
      },
      {
        id: "geom-lycee",
        title: "Géométrie analytique",
        subtitle: "Droites, vecteurs et coordonnées",
        count: "14 exercices",
        description: "Étude des droites dans le plan, des vecteurs et de leur relation avec les coordonnées.",
        content: `
          <h4 class="text-lg font-bold text-white">1. Vecteurs</h4>
          <p>Un vecteur est défini par une direction, un sens et une norme.</p>

          <h4 class="text-lg font-bold text-white mt-4">2. Droite</h4>
          <p>Une droite dans le plan peut être représentée par une équation de type ax + by + c = 0.</p>
        `
      }
    ]
  },

  universite: {
    label: "Université",
    classes: ["L1", "L2", "L3"],
    courses: [
      {
        id: "analyse-univ",
        title: "Analyse 1",
        subtitle: "Limites, continuité et dérivabilité",
        count: "22 exercices",
        description: "Ce chapitre permet d’introduire les notions fondamentales du calcul différentiel et intégral.",
        content: `
          <h4 class="text-lg font-bold text-white">1. Limite</h4>
          <p>Une limite décrit le comportement d’une fonction lorsque la variable se rapproche d’une valeur donnée.</p>

          <div class="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 my-4">
            <p class="text-xs uppercase tracking-[0.18em] text-sky-400 mb-2">Formule</p>
            <p class="font-mono text-sky-300">lim x→a f(x) = L</p>
          </div>

          <h4 class="text-lg font-bold text-white mt-4">2. Continuité</h4>
          <p>Une fonction est continue en un point si sa limite coïncide avec sa valeur en ce point.</p>
        `
      },
      {
        id: "algebre-univ",
        title: "Algèbre linéaire",
        subtitle: "Espaces vectoriels et matrices",
        count: "20 exercices",
        description: "Étude des espaces vectoriels, des bases, des applications linéaires et des matrices.",
        content: `
          <h4 class="text-lg font-bold text-white">1. Espace vectoriel</h4>
          <p>Un espace vectoriel est un ensemble sur lequel on peut additionner des vecteurs et multiplier par un scalaire.</p>

          <h4 class="text-lg font-bold text-white mt-4">2. Base</h4>
          <p>Une base permet de représenter tout vecteur de manière unique comme combinaison linéaire.</p>
        `
      },
      {
        id: "integration-univ",
        title: "Intégration",
        subtitle: "Primitives et calcul intégral",
        count: "17 exercices",
        description: "Calcul des intégrales et recherche de primitives dans les cas simples et usuels.",
        content: `
          <h4 class="text-lg font-bold text-white">1. Primitive</h4>
          <p>Une primitive d’une fonction f est une fonction F telle que F’ = f.</p>

          <h4 class="text-lg font-bold text-white mt-4">2. Intégrale</h4>
          <p>L’intégrale d’une fonction sur un intervalle mesure l’aire sous la courbe sur ce domaine.</p>
        `
      }
    ]
  }
};

const USERS_KEY = "omnimath_users";
const CURRENT_USER_KEY = "omnimath_current_user";

let currentLevel = "college";
let currentClass = "6e";
let currentUser = null;
let selectedQuestionCount = 3;
let quizQuestions = [];
let quizIndex = 0;
let score = 0;
let combo = 0;
let maxCombo = 0;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pgcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y !== 0) {
    const r = x % y;
    x = y;
    y = r;
  }

  return x;
}

function buildQuestionSet(level, className, count) {
  const questionTypes = {
    college: {
      "6e": ["c6_1", "c6_2", "c6_3", "c6_4", "c6_5"],
      "5e": ["c5_1", "c5_2", "c5_3", "c5_4", "c5_5"],
      "4e": ["c4_1", "c4_2", "c4_3", "c4_4", "c4_5"],
      "3e": ["c3_1", "c3_2", "c3_3", "c3_4", "c3_5"]
    },
    lycee: {
      Seconde: ["s1", "s2", "s3", "s4", "s5"],
      Première: ["p1", "p2", "p3", "p4", "p5"],
      Terminale: ["t1", "t2", "t3", "t4", "t5"]
    },
    universite: {
      L1: ["u1_1", "u1_2", "u1_3", "u1_4", "u1_5"],
      L2: ["u2_1", "u2_2", "u2_3", "u2_4", "u2_5"],
      L3: ["u3_1", "u3_2", "u3_3", "u3_4", "u3_5"]
    }
  };

  const list = questionTypes[level][className] || questionTypes[level][Object.keys(questionTypes[level])[0]];
  const result = [];

  for (let i = 0; i < count; i++) {
    const kind = list[randomInt(0, list.length - 1)];
    let q = null;

    if (level === "college" && className === "6e") {
      if (kind === "c6_1") {
        const a = randomInt(12, 72);
        const b = randomInt(12, 90);
        const g = pgcd(a, b);
        q = {
          question: `Quel est le plus grand diviseur commun de ${a} et ${b} ?`,
          options: [g - 2, g - 1, g, g + 2],
          correct: 2,
          explanation: `Le PGCD est ${g}.`,
          demonstration: `On factorise les nombres puis on garde les facteurs communs avec la plus petite puissance. Ici, le PGCD vaut ${g}.`
        };
      }

      if (kind === "c6_2") {
        const x = randomInt(2, 12);
        const value = 2 * x + 5;
        q = {
          question: `Résoudre : 2x + 5 = ${value}`,
          options: [x - 1, x, x + 1, x + 3],
          correct: 1,
          explanation: `x = ${x}.`,
          demonstration: `2x + 5 = ${value} ⇒ 2x = ${value - 5} ⇒ x = ${x}.`
        };
      }

      if (kind === "c6_3") {
        const a = randomInt(3, 10);
        const b = randomInt(4, 12);
        const hyp = Math.round(Math.sqrt(a * a + b * b));
        q = {
          question: `Dans un triangle rectangle, les côtés de l'angle droit mesurent ${a} et ${b}. Quelle est la longueur de l'hypoténuse ?`,
          options: [hyp - 1, hyp, hyp + 1, hyp + 3],
          correct: 1,
          explanation: `L'hypoténuse vaut ${hyp}.`,
          demonstration: `D'après le théorème de Pythagore : ${a}² + ${b}² = ${a * a + b * b}. Donc l'hypoténuse vaut √(${a * a + b * b}) = ${hyp}.`
        };
      }

      if (kind === "c6_4") {
        const n = randomInt(2, 12);
        q = {
          question: `Quel est le résultat de ${n}² ?`,
          options: [n * n - 1, n * n, n * n + 1, n * n + 4],
          correct: 1,
          explanation: `${n}² = ${n * n}.`,
          demonstration: `Le carré d'un nombre se calcule en multipliant le nombre par lui-même : ${n} × ${n} = ${n * n}.`
        };
      }

      if (kind === "c6_5") {
        const a = randomInt(4, 12);
        const b = randomInt(5, 18);
        q = {
          question: `Calculer : ${a} × ${b}`,
          options: [a * b - 2, a * b, a * b + 4, a * b + 8],
          correct: 1,
          explanation: `${a} × ${b} = ${a * b}.`,
          demonstration: `On multiplie ${a} par ${b}. Resultat : ${a * b}.`
        };
      }
    }

    if (level === "college" && className === "5e") {
      if (kind === "c5_1") {
        const a = randomInt(10, 80);
        const b = randomInt(15, 90);
        const g = pgcd(a, b);
        q = {
          question: `Quel est le PGCD de ${a} et ${b} ?`,
          options: [g - 3, g - 1, g, g + 3],
          correct: 2,
          explanation: `Le PGCD vaut ${g}.`,
          demonstration: `On prend les facteurs communs avec la plus petite puissance. Le résultat est ${g}.`
        };
      }

      if (kind === "c5_2") {
        const x = randomInt(3, 12);
        const value = 3 * x - 7;
        q = {
          question: `Résoudre : 3x - 7 = ${value}`,
          options: [x - 1, x, x + 1, x + 2],
          correct: 1,
          explanation: `x = ${x}.`,
          demonstration: `3x - 7 = ${value} ⇒ 3x = ${value + 7} ⇒ x = ${x}.`
        };
      }

      if (kind === "c5_3") {
        const a = randomInt(3, 9);
        const b = randomInt(4, 11);
        const hyp = Math.round(Math.sqrt(a * a + b * b));
        q = {
          question: `Un triangle rectangle a des côtés ${a} et ${b}. Quelle est l'hypoténuse ?`,
          options: [hyp - 1, hyp, hyp + 1, hyp + 3],
          correct: 1,
          explanation: `L’hypoténuse vaut ${hyp}.`,
          demonstration: `Suivant Pythagore : ${a}² + ${b}² = ${a * a + b * b}, donc hypoténuse = √(${a * a + b * b}) = ${hyp}.`
        };
      }

      if (kind === "c5_4") {
        const start = randomInt(2, 10);
        const nextValue = start * 8;
        q = {
          question: `Quelle est la prochaine valeur de la suite : ${start}, ${start * 2}, ${start * 4}, ... ?`,
          options: [nextValue - 3, nextValue, nextValue + 2, start + 4],
          correct: 1,
          explanation: `La suite double à chaque fois.`,
          demonstration: `On multiplie chaque terme par 2. Donc le suivant est ${start * 8}.`
        };
      }

      if (kind === "c5_5") {
        const a = randomInt(5, 20);
        const b = randomInt(3, 10);
        q = {
          question: `Calculer : ${a} ÷ ${b}`,
          options: [Math.floor(a / b) - 1, Math.floor(a / b), Math.floor(a / b) + 1, 0],
          correct: 1,
          explanation: `${a} ÷ ${b} = ${Math.floor(a / b)}.`,
          demonstration: `On cherche combien de fois ${b} se trouve dans ${a}. C'est ${Math.floor(a / b)}.`
        };
      }
    }

    if (level === "college" && className === "4e") {
      if (kind === "c4_1") {
        const a = randomInt(3, 9);
        const b = randomInt(2, 8);
        const val = a * a + b * b;
        q = {
          question: `Quel est le résultat de ${a}² + ${b}² ?`,
          options: [val - 1, val, val + 2, val + 5],
          correct: 1,
          explanation: `${a}² + ${b}² = ${val}.`,
          demonstration: `${a}² = ${a * a} et ${b}² = ${b * b}. En additionnant, on a ${val}.`
        };
      }

      if (kind === "c4_2") {
        const c = randomInt(14, 50);
        const x = (c - 8) / 4;
        q = {
          question: `Résoudre : 4x + 8 = ${c}`,
          options: [x - 1, x, x + 1, x + 2],
          correct: 1,
          explanation: `x = ${x}.`,
          demonstration: `4x = ${c - 8} ⇒ x = ${x}.`
        };
      }

      if (kind === "c4_3") {
        const a = randomInt(3, 10);
        const b = randomInt(4, 12);
        const hyp = Math.round(Math.sqrt(a * a + b * b));
        q = {
          question: `Les côtés de l'angle droit sont ${a} et ${b}. Quelle est l'hypoténuse ?`,
          options: [hyp - 1, hyp, hyp + 1, hyp + 4],
          correct: 1,
          explanation: `L’hypoténuse vaut ${hyp}.`,
          demonstration: `√(${a}² + ${b}²) = √(${a * a + b * b}) = ${hyp}.`
        };
      }

      if (kind === "c4_4") {
        const n = randomInt(10, 30);
        q = {
          question: `Quel est le double de ${n} ?`,
          options: [n + 5, n * 2, n + 10, n * 3],
          correct: 1,
          explanation: `Le double de ${n} est ${n * 2}.`,
          demonstration: `2 × ${n} = ${n * 2}.`
        };
      }

      if (kind === "c4_5") {
        const a = randomInt(8, 20);
        const b = randomInt(2, 12);
        q = {
          question: `Quel est le résultat de ${a} + ${b} ?`,
          options: [a + b - 1, a + b, a + b + 2, a + b + 5],
          correct: 1,
          explanation: `${a} + ${b} = ${a + b}.`,
          demonstration: `On additionne : ${a} + ${b} = ${a + b}.`
        };
      }
    }

    if (level === "college" && className === "3e") {
      if (kind === "c3_1") {
        const a = randomInt(5, 15);
        const b = randomInt(2, 10);
        const val = a * a - b * b;
        q = {
          question: `Quelle est la valeur de ${a}² - ${b}² ?`,
          options: [val - 2, val, val + 2, val + 5],
          correct: 1,
          explanation: `${a}² - ${b}² = ${val}.`,
          demonstration: `${a}² = ${a * a} et ${b}² = ${b * b}. Donc ${a * a} - ${b * b} = ${val}.`
        };
      }

      if (kind === "c3_2") {
        const x = randomInt(3, 12);
        const value = x / 3 + 5;
        q = {
          question: `Résoudre : x/3 + 5 = ${value}`,
          options: [x - 2, x, x + 2, x + 5],
          correct: 1,
          explanation: `x = ${x}.`,
          demonstration: `x/3 = ${value - 5} ⇒ x = ${x}.`
        };
      }

      if (kind === "c3_3") {
        const opp = randomInt(3, 12);
        const hyp = randomInt(opp + 2, opp + 12);
        q = {
          question: `Dans un triangle rectangle, le côté opposé vaut ${opp} et l’hypoténuse vaut ${hyp}. Que vaut sin(θ) ?`,
          options: [opp / hyp, hyp / opp, opp + hyp, opp - hyp],
          correct: 0,
          explanation: `sin(θ) = côté opposé / hypoténuse = ${opp / hyp}.`,
          demonstration: `sin(θ) = ${opp} / ${hyp}.`
        };
      }

      if (kind === "c3_4") {
        const c = randomInt(4, 12);
        q = {
          question: `Le périmètre d’un carré de côté ${c} est :`,
          options: [2 * c, 3 * c, 4 * c, 5 * c],
          correct: 2,
          explanation: `Périmètre = 4 × côté = ${4 * c}.`,
          demonstration: `Le carré a 4 côtés égaux : ${c} + ${c} + ${c} + ${c} = ${4 * c}.`
        };
      }

      if (kind === "c3_5") {
        const a = randomInt(7, 18);
        const b = randomInt(2, 9);
        q = {
          question: `Quel est le quotient de ${a} par ${b} ?`,
          options: [Math.floor(a / b) - 1, Math.floor(a / b), Math.floor(a / b) + 1, a * b],
          correct: 1,
          explanation: `${a} ÷ ${b} = ${Math.floor(a / b)}.`,
          demonstration: `On cherche combien de fois ${b} est contenu dans ${a}.`
        };
      }
    }

    if (level === "lycee" && className === "Seconde") {
      if (kind === "s1") {
        const a = randomInt(2, 10);
        const b = randomInt(2, 10);
        const c = randomInt(1, 12);
        const delta = b * b - 4 * a * c;
        q = {
          question: `Calcule le discriminant de l’équation ${a}x² + ${b}x + ${c} = 0.`,
          options: [delta - 1, delta, delta + 1, delta + 3],
          correct: 1,
          explanation: `Δ = ${delta}.`,
          demonstration: `Δ = b² - 4ac = ${b}² - 4 × ${a} × ${c} = ${delta}.`
        };
      }

      if (kind === "s2") {
        const a = randomInt(2, 8);
        const b = randomInt(3, 12);
        const c = randomInt(1, 9);
        const delta = b * b - 4 * a * c;
        q = {
          question: `Une équation a Δ = ${delta}. Combien de racines réelles a-t-elle ?`,
          options: ["2", "1", "0", "3"],
          correct: 0,
          explanation: `Comme Δ > 0, elle a 2 racines réelles.`,
          demonstration: `Quand Δ > 0, la parabole coupe l’axe des abscisses en 2 points.`
        };
      }

      if (kind === "s3") {
        q = {
          question: "Que vaut la dérivée de x² ?",
          options: ["x", "2x", "x²", "2"],
          correct: 1,
          explanation: "La dérivée est 2x.",
          demonstration: `(x^2)' = 2x.`
        };
      }

      if (kind === "s4") {
        const a = randomInt(2, 7);
        const b = randomInt(1, 8);
        q = {
          question: `Quelle est la nature de la fonction f(x) = ${a}x² + ${b} ?`,
          options: ["affine", "linéaire", "quadratique", "constante"],
          correct: 2,
          explanation: `C’est une fonction quadratique.`,
          demonstration: `Une fonction quadratique a la forme ax² + bx + c.`
        };
      }

      if (kind === "s5") {
        const b = randomInt(1, 9);
        const delta = b * b - 4;
        q = {
          question: `Le discriminant de x² + ${b}x + 1 = 0 vaut :`,
          options: [delta - 1, delta, delta + 2, delta + 5],
          correct: 1,
          explanation: `Δ = ${delta}.`,
          demonstration: `Δ = b² - 4ac = ${b}² - 4 × 1 × 1 = ${delta}.`
        };
      }
    }

    if (level === "lycee" && className === "Première") {
      if (kind === "p1") {
        q = {
          question: "Le tableau de signes sert à :",
          options: [
            "déterminer le signe d’une expression",
            "calculer une somme",
            "tracer un cercle",
            "résoudre une équation de droite"
          ],
          correct: 0,
          explanation: "Il sert à déterminer le signe d’une expression.",
          demonstration: "On étudie le signe des facteurs pour savoir si l’expression est positive ou négative."
        };
      }

      if (kind === "p2") {
        const a = randomInt(2, 9);
        q = {
          question: `Quelle est la dérivée de ${a}x² ?`,
          options: [`${2 * a}x`, `${a}x`, `${2 * a}`, `${a}x²`],
          correct: 0,
          explanation: `La dérivée est ${2 * a}x.`,
          demonstration: `On applique la règle (k x²)' = 2k x.`
        };
      }

      if (kind === "p3") {
        q = {
          question: "Une fonction affine a la forme :",
          options: ["ax + b", "ax² + bx + c", "a/x", "x³"],
          correct: 0,
          explanation: "La forme est ax + b.",
          demonstration: "La représentation graphique est une droite."
        };
      }

      if (kind === "p4") {
        const b = randomInt(4, 14);
        const x = (b + 3) / 2;
        q = {
          question: `Résoudre : 2x - 3 = ${b}`,
          options: [x - 1, x, x + 2, x + 4],
          correct: 1,
          explanation: `x = ${x}.`,
          demonstration: `2x = ${b + 3} ⇒ x = ${x}.`
        };
      }

      if (kind === "p5") {
        const a = randomInt(2, 8);
        q = {
          question: `Le produit (${a} + x)(${a} - x) est égal à :`,
          options: [`${a * a} - x²`, `${a * a} + x²`, `${a * a} - 2ax`, `${a * a} + 2ax`],
          correct: 0,
          explanation: `Le résultat est ${a * a} - x².`,
          demonstration: `(a + x)(a - x) = a² - x².`
        };
      }
    }

    if (level === "lycee" && className === "Terminale") {
      if (kind === "t1") {
        q = {
          question: "La limite de 1/x quand x tend vers +∞ est :",
          options: ["0", "1", "+∞", "-∞"],
          correct: 0,
          explanation: "La limite vaut 0.",
          demonstration: "Quand x devient grand, 1/x devient très petit."
        };
      }

      if (kind === "t2") {
        q = {
          question: "La dérivée de sin(x) est :",
          options: ["cos(x)", "sin(x)", "-cos(x)", "-sin(x)"],
          correct: 0,
          explanation: "La dérivée de sin(x) est cos(x).",
          demonstration: "(sin x)' = cos x."
        };
      }

      if (kind === "t3") {
        const m = randomInt(2, 6);
        const p = randomInt(1, 8);
        q = {
          question: `L’équation d’une droite de coefficient directeur ${m} et d’ordonnée à l’origine ${p} est :`,
          options: [`y = ${m}x + ${p}`, `y = ${p}x + ${m}`, `y = ${m}x - ${p}`, `y = x + ${m + p}`],
          correct: 0,
          explanation: `La bonne équation est y = ${m}x + ${p}.`,
          demonstration: `On utilise la forme y = mx + p.`
        };
      }

      if (kind === "t4") {
        const a = randomInt(2, 8);
        q = {
          question: `La primitive de ${a}x² est :`,
          options: [`${a / 3}x³`, `${a}x³`, `${a}x`, `${a + 1}x³`],
          correct: 0,
          explanation: `La primitive est ${a / 3}x³.`,
          demonstration: `La dérivée de ${a / 3}x³ est ${a}x².`
        };
      }

      if (kind === "t5") {
        q = {
          question: "La limite de sin(x)/x quand x tend vers 0 vaut :",
          options: ["0", "1", "+∞", "x"],
          correct: 1,
          explanation: "La limite vaut 1.",
          demonstration: "C’est une limite fondamentale du calcul différentiel."
        };
      }
    }

    if (level === "universite" && className === "L1") {
      if (kind === "u1_1") {
        const n = randomInt(2, 9);
        q = {
          question: `La dérivée de x^${n} est :`,
          options: [`${n}x^${n - 1}`, `x^${n - 1}`, `${n}x`, `${n - 1}x^${n}`],
          correct: 0,
          explanation: `La dérivée est ${n}x^${n - 1}.`,
          demonstration: `(x^n)' = n x^(n-1).`
        };
      }

      if (kind === "u1_2") {
        const a = randomInt(2, 8);
        q = {
          question: `La primitive de ${a}x est :`,
          options: [`${a / 2}x²`, `${a}x²`, `${a}x`, `${a + 1}x²`],
          correct: 0,
          explanation: `La primitive est ${a / 2}x².`,
          demonstration: `La dérivée de ${a / 2}x² est ${a}x.`
        };
      }

      if (kind === "u1_3") {
        q = {
          question: "Le produit scalaire de deux vecteurs est :",
          options: ["un scalaire", "un vecteur", "une matrice", "une droite"],
          correct: 0,
          explanation: "C’est un scalaire.",
          demonstration: "u·v = |u||v| cos θ, c’est un nombre réel."
        };
      }

      if (kind === "u1_4") {
        q = {
          question: "Une base d'un espace vectoriel permet de :",
          options: [
            "décomposer tout vecteur de manière unique",
            "calculer une dérivée",
            "calculer une intégrale",
            "tracer une parabole"
          ],
          correct: 0,
          explanation: "Une base permet d’écrire tout vecteur de façon unique.",
          demonstration: "Chaque vecteur est combinaison linéaire des vecteurs de la base."
        };
      }

      if (kind === "u1_5") {
        const a = randomInt(2, 7);
        q = {
          question: `La limite de ${a}/x quand x tend vers +∞ est :`,
          options: ["0", "1", "+∞", "-∞"],
          correct: 0,
          explanation: `La limite vaut 0.`,
          demonstration: `Quand x devient très grand, ${a}/x tend vers 0.`
        };
      }
    }

    if (level === "universite" && className === "L2") {
      if (kind === "u2_1") {
        q = {
          question: "Une matrice symétrique réelle est :",
          options: ["toujours diagonalisable", "toujours nulle", "jamais inversible", "toujours constante"],
          correct: 0,
          explanation: "Elle est diagonalisable dans une base orthonormée.",
          demonstration: "C’est le théorème spectral."
        };
      }

      if (kind === "u2_2") {
        q = {
          question: "Une application linéaire conserve :",
          options: ["la combinaison linéaire", "seulement l’addition", "seulement la division", "aucune structure"],
          correct: 0,
          explanation: "Elle conserve la combinaison linéaire.",
          demonstration: "T(αu + βv) = αT(u) + βT(v)."
        };
      }

      if (kind === "u2_3") {
        const x = randomInt(2, 9);
        const y = randomInt(2, 9);
        q = {
          question: `Quelle est la norme du vecteur (${x}, ${y}) ?`,
          options: [Math.sqrt(x * x + y * y) - 1, Math.sqrt(x * x + y * y), x + y, x * y],
          correct: 1,
          explanation: `La norme est √(${x}² + ${y}²).`,
          demonstration: `||v|| = √(x² + y²).`
        };
      }

      if (kind === "u2_4") {
        q = {
          question: "Un système linéaire est compatible s’il a :",
          options: ["au moins une solution", "aucune solution", "une matrice nulle", "deux variables"],
          correct: 0,
          explanation: "Le système est compatible s’il a au moins une solution.",
          demonstration: "Il existe un vecteur solution qui satisfait toutes les équations."
        };
      }

      if (kind === "u2_5") {
        q = {
          question: "La dimension de l’espace M₂(ℝ) est :",
          options: ["2", "3", "4", "6"],
          correct: 2,
          explanation: "La dimension est 4.",
          demonstration: "Une matrice 2×2 a 4 coefficients indépendants."
        };
      }
    }

    if (level === "universite" && className === "L3") {
      if (kind === "u3_1") {
        q = {
          question: "Une suite convergente est :",
          options: ["toujours décroissante", "toujours monotone", "bornée", "toujours divergente"],
          correct: 2,
          explanation: "Une suite convergente est bornée.",
          demonstration: "Si elle tend vers une limite, elle reste dans un intervalle autour de cette limite."
        };
      }

      if (kind === "u3_2") {
        q = {
          question: "La dérivée de e^x est :",
          options: ["x e^x", "e^x", "ln(x)", "x"],
          correct: 1,
          explanation: "La dérivée de e^x est e^x.",
          demonstration: "La fonction exponentielle est sa propre dérivée."
        };
      }

      if (kind === "u3_3") {
        q = {
          question: "L’intégrale de 0 sur [a, b] vaut :",
          options: ["1", "a", "b - a", "0"],
          correct: 3,
          explanation: "La réponse est 0.",
          demonstration: "L’aire sous une fonction nulle est nulle."
        };
      }

      if (kind === "u3_4") {
        q = {
          question: "La limite de sin(x)/x quand x tend vers 0 vaut :",
          options: ["0", "1", "+∞", "x"],
          correct: 1,
          explanation: "La limite vaut 1.",
          demonstration: "C’est une limite classique du calcul différentiel."
        };
      }

      if (kind === "u3_5") {
        q = {
          question: "Le déterminant d’une matrice carrée est non nul si et seulement si :",
          options: ["la matrice est inversible", "la matrice est nulle", "la matrice est symétrique", "la matrice est diagonale"],
          correct: 0,
          explanation: "Le déterminant est non nul si et seulement si la matrice est inversible.",
          demonstration: "C’est la condition d’inversibilité d’une matrice."
        };
      }
    }

    if (!q) {
      q = {
        question: "Quelle est la bonne réponse ?",
        options: ["A", "B", "C", "D"],
        correct: 0,
        explanation: "Réponse de base.",
        demonstration: "Explication de base."
      };
    }

    const mixed = shuffle(q.options);
    const goodIndex = mixed.indexOf(q.options[q.correct]);

    result.push({
      question: q.question,
      options: mixed,
      correct: goodIndex,
      explanation: q.explanation,
      demonstration: q.demonstration
    });
  }

  return result;
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setCurrentUser(user) {
  currentUser = user;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)) || null;
  } catch {
    return null;
  }
}

function getUserLevelFromXp(xp) {
  if (xp >= 2000) return 10;
  if (xp >= 1500) return 9;
  if (xp >= 1200) return 8;
  if (xp >= 900) return 7;
  if (xp >= 650) return 6;
  if (xp >= 450) return 5;
  if (xp >= 300) return 4;
  if (xp >= 180) return 3;
  if (xp >= 80) return 2;
  return 1;
}

function showNotificationBubble(message) {
  let bubble = document.getElementById("omnimathBubble");
  if (!bubble) {
    bubble = document.createElement("div");
    bubble.id = "omnimathBubble";
    bubble.className = "notification-bubble";
    document.body.appendChild(bubble);
  }

  bubble.textContent = message;
  bubble.classList.add("show");

  clearTimeout(showNotificationBubble.timeoutId);
  showNotificationBubble.timeoutId = setTimeout(() => {
    bubble.classList.remove("show");
  }, 3000);
}

function updateDashboardStats() {
  const statScore = document.getElementById("statScore");
  const statCombo = document.getElementById("statCombo");
  const statSessions = document.getElementById("statSessions");
  const statCourses = document.getElementById("statCourses");

  const percent = quizQuestions.length ? Math.round((score / quizQuestions.length) * 100) : 0;

  statScore.textContent = `${percent}%`;
  statCombo.textContent = `x${maxCombo || 0}`;
  statSessions.textContent = `${Math.max(1, Math.round((maxCombo || 1) * 2 + 4))}`;
  statCourses.textContent = `${Math.max(1, Math.round((score || 0) + 3))}`;
}

function setLevel(level) {
  currentLevel = level;
  const data = levelsData[level];
  currentClass = data.classes[0];

  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.level === level);
  });

  populateClassOptions();
  renderCourses();
}

function populateClassOptions() {
  const data = levelsData[currentLevel];
  const select = document.getElementById("classSelect");
  select.innerHTML = "";

  data.classes.forEach((cls) => {
    const option = document.createElement("option");
    option.value = cls;
    option.textContent = cls;
    if (cls === currentClass) option.selected = true;
    select.appendChild(option);
  });
}

function renderCourses() {
  const data = levelsData[currentLevel];
  const container = document.getElementById("coursesContainer");
  container.innerHTML = "";

  data.courses.forEach((course) => {
    const card = document.createElement("div");
    card.className = "rounded-3xl border border-slate-800 bg-slate-900/60 p-6 card-hover";
    card.innerHTML = `
      <div class="flex items-center justify-between gap-3 mb-4">
        <span class="text-[10px] uppercase tracking-[0.18em] text-sky-400">${course.count}</span>
        <span class="text-xs text-slate-500">${data.label}</span>
      </div>
      <h3 class="text-xl font-black text-white mb-2">${course.title}</h3>
      <p class="text-sky-300 text-sm mb-3">${course.subtitle}</p>
      <p class="text-slate-400 text-sm leading-relaxed mb-6">${course.description}</p>
      <div class="flex gap-3">
        <button class="view-course-btn flex-1 rounded-xl border border-slate-700 bg-slate-950/80 text-sky-400 py-2.5 font-bold" data-id="${course.id}">Voir le cours</button>
        <button class="start-quiz-btn flex-1 rounded-xl bg-gradient-to-r from-sky-400 to-emerald-400 text-slate-950 py-2.5 font-bold" data-id="${course.id}">S’entraîner</button>
      </div>
    `;
    container.appendChild(card);
  });

  attachCourseEvents();
}

function findCourseById(courseId) {
  const data = levelsData[currentLevel];
  return data.courses.find((course) => course.id === courseId) || null;
}

function attachCourseEvents() {
  document.querySelectorAll(".view-course-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const course = findCourseById(btn.dataset.id);
      openCourseModal(course);
    });
  });

  document.querySelectorAll(".start-quiz-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const course = findCourseById(btn.dataset.id);
      launchQuiz(course);
    });
  });
}

function openCourseModal(course) {
  if (!course) return;

  const modal = document.getElementById("courseModal");
  const modalLevel = document.getElementById("modalLevel");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  modalLevel.textContent = `${levelsData[currentLevel].label} • ${currentClass}`;
  modalTitle.textContent = course.title;
  modalContent.innerHTML = course.content;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeCourseModal() {
  const modal = document.getElementById("courseModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function launchQuiz(course) {
  const generated = buildQuestionSet(currentLevel, currentClass, selectedQuestionCount);
  quizQuestions = generated;
  quizIndex = 0;
  score = 0;
  combo = 0;
  maxCombo = 0;

  const quizQuestionBlock = document.getElementById("quizQuestionBlock");
  const quizResultBlock = document.getElementById("quizResultBlock");
  const currentView = document.getElementById("currentIndexView");
  const totalView = document.getElementById("totalQuestionsView");
  const progressFill = document.getElementById("progressFill");
  const nextBtn = document.getElementById("nextQuestionBtn");
  const comboBadge = document.getElementById("comboBadge");
  const explanationBox = document.getElementById("quizExplanationBox");

  totalView.textContent = quizQuestions.length;
  currentView.textContent = 1;

  progressFill.style.width = "0%";
  comboBadge.classList.add("hidden");
  comboBadge.textContent = "🔥 Combo x1";

  quizResultBlock.classList.add("hidden");
  quizQuestionBlock.classList.remove("hide");
  explanationBox.classList.add("hidden");
  nextBtn.textContent = "Question suivante";

  function showQuestion() {
    const q = quizQuestions[quizIndex];
    if (!q) return;

    document.getElementById("quizQuestion").textContent = q.question;
    const optionsNode = document.getElementById("quizOptions");
    optionsNode.innerHTML = "";

    q.options.forEach((option, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-left font-semibold text-slate-200";
      btn.textContent = option;
      btn.addEventListener("click", () => handleAnswer(btn, idx, q));
      optionsNode.appendChild(btn);
    });

    currentView.textContent = String(quizIndex + 1);
    const percent = ((quizIndex + 1) / quizQuestions.length) * 100;
    progressFill.style.width = `${percent}%`;
  }

  function updateComboDisplay() {
    comboBadge.textContent = `🔥 Combo x${combo}`;
    if (combo > 1) {
      comboBadge.classList.remove("hidden");
    } else {
      comboBadge.classList.add("hidden");
    }
  }

  function handleAnswer(button, selectedIndex, q) {
    const buttons = [...document.querySelectorAll("#quizOptions button")];
    const explanationBox = document.getElementById("quizExplanationBox");
    const resultTitle = document.getElementById("resultTitle");
    const resultText = document.getElementById("resultText");
    const detailedText = document.getElementById("detailedExplanationText");
    const detailedExplanation = document.getElementById("detailedExplanation");
    const toggleBtn = document.getElementById("toggleDetailBtn");

    buttons.forEach((opt) => {
      opt.disabled = true;
      opt.classList.add("opacity-80");
    });

    if (selectedIndex === q.correct) {
      button.classList.add("border-emerald-500", "bg-emerald-500/10", "text-emerald-300");
      combo++;
      maxCombo = Math.max(maxCombo, combo);
      updateComboDisplay();

      resultTitle.textContent = "Bonne réponse !";
      resultTitle.classList.remove("text-red-300");
      resultTitle.classList.add("text-emerald-300");
      resultText.textContent = q.explanation;
      detailedText.textContent = q.demonstration;
      score++;
    } else {
      button.classList.add("border-red-500", "bg-red-500/10", "text-red-300");
      buttons[q.correct].classList.add("border-emerald-500", "bg-emerald-500/10", "text-emerald-300");
      combo = 0;
      updateComboDisplay();

      resultTitle.textContent = "Réponse correcte";
      resultTitle.classList.remove("text-emerald-300");
      resultTitle.classList.add("text-red-300");
      resultText.textContent = `${q.options[q.correct]} est la bonne réponse. ${q.explanation}`;
      detailedText.textContent = q.demonstration;
    }

    explanationBox.classList.remove("hidden");
    detailedExplanation.classList.add("hidden");
    toggleBtn.textContent = "Voir la démonstration";

    toggleBtn.onclick = () => {
      detailedExplanation.classList.toggle("hidden");
      toggleBtn.textContent = detailedExplanation.classList.contains("hidden")
        ? "Voir la démonstration"
        : "Masquer la démonstration";
    };

    updateDashboardStats();

    setTimeout(() => {
      if (quizIndex < quizQuestions.length - 1) {
        document.getElementById("quizQuestionBlock").classList.add("hide");
        document.getElementById("quizResultBlock").classList.remove("hidden");
        document.getElementById("quizResultTitle").textContent =
          selectedIndex === q.correct ? "Bonne réponse !" : "Réponse correcte";
        document.getElementById("quizResultText").textContent = q.explanation;
        document.getElementById("nextQuestionBtn").textContent = "Question suivante";
      } else {
        document.getElementById("quizQuestionBlock").classList.add("hide");
        document.getElementById("quizResultBlock").classList.remove("hidden");

        const pct = Math.round((score / quizQuestions.length) * 100);

        document.dispatchEvent(new CustomEvent("quizFinished", {
          detail: { percent: pct, combo: maxCombo }
        }));

        document.getElementById("quizResultTitle").textContent = "Session terminée";
        document.getElementById("quizResultText").textContent =
          `Score final : ${score}/${quizQuestions.length} • ${pct}% de réussite • Max combo : x${maxCombo}. Continuez l’entraînement pour progresser.`;
        document.getElementById("nextQuestionBtn").textContent = "Rejouer";
      }
    }, 600);
  }

  document.getElementById("nextQuestionBtn").onclick = () => {
    const qBlock = document.getElementById("quizQuestionBlock");
    const rBlock = document.getElementById("quizResultBlock");
    const explanationBox = document.getElementById("quizExplanationBox");
    const detailedExplanation = document.getElementById("detailedExplanation");
    const toggleBtn = document.getElementById("toggleDetailBtn");

    rBlock.classList.add("hidden");
    qBlock.classList.remove("hide");
    explanationBox.classList.add("hidden");
    detailedExplanation.classList.add("hidden");
    toggleBtn.textContent = "Voir la démonstration";

    quizIndex++;

    if (quizIndex >= quizQuestions.length) {
      quizIndex = 0;
      score = 0;
      combo = 0;
      maxCombo = 0;
      updateDashboardStats();
    }

    showQuestion();
  };

  showQuestion();
  document.getElementById("quizApp").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateUserProfileUi() {
  const panel = document.getElementById("userProfilePanel");
  if (!currentUser) {
    panel.classList.add("hidden");
    return;
  }

  panel.classList.remove("hidden");
  document.getElementById("profilePseudo").textContent = currentUser.pseudo;
  document.getElementById("profileLevel").textContent = `Niveau ${currentUser.level || 1}`;
  document.getElementById("profileXp").textContent = currentUser.xp || 0;
  document.getElementById("profileBest").textContent = `${currentUser.bestScore || 0}%`;
  document.getElementById("profileAge").textContent = currentUser.age || "-";
  document.getElementById("profileClass").textContent = currentUser.classe || "-";
  document.getElementById("profileSex").textContent = currentUser.sexe || "-";
  document.getElementById("profileSource").textContent = currentUser.source || "-";
}

function updateMascotAppearance() {
  const owlCard = document.querySelector(".owl-card");
  if (!owlCard) return;

  owlCard.classList.remove("evolved", "human-form");

  const level = currentUser ? currentUser.level || 1 : 1;

  if (level >= 7) {
    owlCard.classList.add("human-form");
    owlCard.querySelector(".owl-message h3").textContent = "Locky humain";
    owlCard.querySelector(".owl-message p").textContent =
      "Ton niveau est très élevé. Tu es devenu un mentor de mathématiques. Continue à inspirer.";
  } else if (level >= 5) {
    owlCard.classList.add("evolved");
    owlCard.querySelector(".owl-message h3").textContent = "Hibou Locky";
    owlCard.querySelector(".owl-message p").textContent =
      "Tu progresses bien. Ton niveau augmente, ton intelligence se développe et ta mascotte évolue.";
  } else if (level >= 3) {
    owlCard.classList.add("evolved");
    owlCard.querySelector(".owl-message h3").textContent = "Hibou Locky";
    owlCard.querySelector(".owl-message p").textContent =
      "Tu avances bien. Continue pour faire grandir ta performance.";
  } else {
    owlCard.querySelector(".owl-message h3").textContent = "Hibou Locky";
    owlCard.querySelector(".owl-message p").textContent =
      "Continue tes entraînements, la constance fait gagner les meilleurs scores.";
  }

  const miniValue = owlCard.querySelector(".mini-score-value");
  if (miniValue) {
    miniValue.textContent = currentUser ? `${currentUser.classe || "Niveau"} • ${currentUser.pseudo}` : "Lycée • Seconde";
  }
}

function updateUserProgressAfterQuiz(scorePercent, comboValue) {
  if (!currentUser) return;

  const users = getUsers();
  const index = users.findIndex((u) => u.pseudo.toLowerCase() === currentUser.pseudo.toLowerCase());

  if (index === -1) return;

  const xpGain = Math.max(20, Math.round(scorePercent * 1.6 + comboValue * 10));
  users[index].xp = (users[index].xp || 0) + xpGain;
  users[index].bestScore = Math.max(users[index].bestScore || 0, scorePercent);
  users[index].bestCombo = Math.max(users[index].bestCombo || 0, comboValue);
  users[index].sessions = (users[index].sessions || 0) + 1;
  users[index].lastLogin = new Date().toISOString();
  users[index].level = getUserLevelFromXp(users[index].xp);

  currentUser = users[index];
  setCurrentUser(currentUser);
  saveUsers(users);

  updateUserProfileUi();
  updateMascotAppearance();
}

function showAuthFlow() {
  const saved = getCurrentUser();
  if (saved) {
    currentUser = saved;
    document.getElementById("loginFormBox").classList.add("hidden");
    document.getElementById("registerFormBox").classList.add("hidden");
    document.getElementById("userProfilePanel").classList.remove("hidden");
    updateUserProfileUi();
    updateMascotAppearance();
  } else {
    currentUser = null;
    document.getElementById("userProfilePanel").classList.add("hidden");
    document.getElementById("loginFormBox").classList.remove("hidden");
    document.getElementById("registerFormBox").classList.add("hidden");
  }
}

function askNotificationPermission() {
  if (!("Notification" in window)) {
    showNotificationBubble("Les notifications ne sont pas supportées sur ce navigateur.");
    return;
  }

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      showNotificationBubble("Rappels activés !");
      setTimeout(() => {
        new Notification("Omnimath.dev", {
          body: "Reviens pour renforcer ton niveau et gagner encore plus d’XP !"
        });
      }, 1500);
    } else {
      showNotificationBubble("Les notifications n'ont pas été autorisées.");
    }
  });
}

function scheduleReminder() {
  const reminderDelay = 1000 * 60 * 60 * 8;

  setInterval(() => {
    if (currentUser && "Notification" in window && Notification.permission === "granted") {
      new Notification("Rappel Omnimath", {
        body: `${currentUser.pseudo}, reviens faire un petit quiz et augmenter ton niveau.`
      });
    }
  }, reminderDelay);
}

document.getElementById("showLoginTab").addEventListener("click", () => {
  document.getElementById("showLoginTab").classList.add("active");
  document.getElementById("showRegisterTab").classList.remove("active");
  document.getElementById("loginFormBox").classList.remove("hidden");
  document.getElementById("registerFormBox").classList.add("hidden");
});

document.getElementById("showRegisterTab").addEventListener("click", () => {
  document.getElementById("showRegisterTab").classList.add("active");
  document.getElementById("showLoginTab").classList.remove("active");
  document.getElementById("registerFormBox").classList.remove("hidden");
  document.getElementById("loginFormBox").classList.add("hidden");
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudo = document.getElementById("regPseudo").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const age = Number(document.getElementById("regAge").value);
  const classe = document.getElementById("regClass").value;
  const sexe = document.getElementById("regSex").value;
  const source = document.getElementById("regSource").value;

  if (!pseudo || !password || !age || !classe || !sexe || !source) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  const users = getUsers();
  const exists = users.some((u) => u.pseudo.toLowerCase() === pseudo.toLowerCase());

  if (exists) {
    alert("Ce pseudo est déjà utilisé. Choisissez un autre.");
    return;
  }

  const newUser = {
    pseudo,
    password,
    age,
    classe,
    sexe,
    source,
    xp: 0,
    level: 1,
    bestScore: 0,
    bestCombo: 0,
    sessions: 0,
    lastLogin: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);

  document.getElementById("registerForm").reset();
  updateUserProfileUi();
  updateMascotAppearance();
  showNotificationBubble("Compte créé avec succès !");
  showAuthFlow();
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const pseudo = document.getElementById("loginPseudo").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const users = getUsers();
  const found = users.find(
    (u) =>
      u.pseudo.toLowerCase() === pseudo.toLowerCase() &&
      u.password === password
  );

  if (!found) {
    alert("Pseudo ou mot de passe incorrect.");
    return;
  }

  found.lastLogin = new Date().toISOString();
  setCurrentUser(found);

  const updatedUsers = users.map((u) =>
    u.pseudo.toLowerCase() === found.pseudo.toLowerCase() ? found : u
  );
  saveUsers(updatedUsers);

  document.getElementById("loginForm").reset();
  updateUserProfileUi();
  updateMascotAppearance();
  showNotificationBubble(`Bienvenue ${found.pseudo} !`);
  showAuthFlow();
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem(CURRENT_USER_KEY);
  currentUser = null;
  document.getElementById("loginFormBox").classList.remove("hidden");
  document.getElementById("registerFormBox").classList.add("hidden");
  document.getElementById("userProfilePanel").classList.add("hidden");
  showNotificationBubble("Déconnexion réussie.");
});

document.getElementById("notifyBtn").addEventListener("click", askNotificationPermission);

document.addEventListener("quizFinished", (event) => {
  if (!currentUser) return;

  const percent = event.detail.percent || 0;
  const comboValue = event.detail.combo || 0;

  updateUserProgressAfterQuiz(percent, comboValue);
  showNotificationBubble(`Bravo ${currentUser.pseudo} ! +${Math.max(20, Math.round(percent * 1.6 + comboValue * 10))} XP`);
});

document.getElementById("closeModalBtn").addEventListener("click", closeCourseModal);
document.getElementById("modalCloseSecondary").addEventListener("click", closeCourseModal);

document.querySelectorAll(".level-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLevel(btn.dataset.level));
});

document.getElementById("classSelect").addEventListener("change", (e) => {
  currentClass = e.target.value;
  renderCourses();
});

document.querySelectorAll(".question-count-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedQuestionCount = Number(btn.dataset.count);

    document.querySelectorAll(".question-count-btn").forEach((b) => {
      b.classList.remove("bg-sky-500", "text-slate-950", "border-sky-500");
      b.classList.add("bg-slate-950", "text-slate-200", "border-slate-700");
    });

    btn.classList.remove("bg-slate-950", "text-slate-200", "border-slate-700");
    btn.classList.add("bg-sky-500", "text-slate-950", "border-sky-500");
  });
});

setLevel("college");

const defaultCountBtn = document.querySelector('.question-count-btn[data-count="3"]');
if (defaultCountBtn) {
  defaultCountBtn.classList.remove("bg-slate-950", "text-slate-200", "border-slate-700");
  defaultCountBtn.classList.add("bg-sky-500", "text-slate-950", "border-sky-500");
}

updateDashboardStats();
showAuthFlow();
updateMascotAppearance();
scheduleReminder();