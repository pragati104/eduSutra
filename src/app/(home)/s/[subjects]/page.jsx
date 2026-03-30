"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const SubjectPage = () => {
  var syllabus = {
    // physics
    physics: [
      {
        chapter_name: "Units and Dimensions",
        total_videos: "50",
        total_tests: "3",
        notes: "20 pages",
        topics: [
          "Introduction to units",
          "Dimensional analysis",
          "SI units",
          "Dimensional formulas",
          "Dimensional equations",
        ],
      },
      {
        chapter_name: "Kinematics",
        total_videos: "80",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Motion in one dimension",
          "Motion in two dimensions",
          "Uniform and non-uniform motion",
          "Acceleration",
          "Equations of motion",
        ],
      },
      {
        chapter_name: "Laws of Motion",
        total_videos: "70",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Newton's laws of motion",
          "Inertia and its types",
          "Force",
          "Friction",
          "Applications of laws of motion",
        ],
      },
      {
        chapter_name: "Work, Energy, and Power",
        total_videos: "60",
        total_tests: "3",
        notes: "18 pages",
        topics: [
          "Work",
          "Energy",
          "Power",
          "Conservation of energy",
          "Gravitational potential energy",
        ],
      },
      {
        chapter_name: "Rotational Motion",
        total_videos: "90",
        total_tests: "6",
        notes: "30 pages",
        topics: [
          "Rotational kinematics",
          "Torque",
          "Moment of inertia",
          "Angular momentum",
          "Rolling motion",
        ],
      },
      {
        chapter_name: "Gravitation",
        total_videos: "65",
        total_tests: "4",
        notes: "20 pages",
        topics: [
          "Gravitational force",
          "Newton's law of universal gravitation",
          "Gravitational field",
          "Escape velocity",
          "Satellites",
        ],
      },
      {
        chapter_name: "Properties of Matter",
        total_videos: "75",
        total_tests: "5",
        notes: "22 pages",
        topics: [
          "Elasticity",
          "Stress and strain",
          "Surface tension",
          "Viscosity",
          "Fluid mechanics",
        ],
      },
      {
        chapter_name: "Thermodynamics",
        total_videos: "85",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Thermal equilibrium",
          "Zeroth law of thermodynamics",
          "First law of thermodynamics",
          "Second law of thermodynamics",
          "Heat engines",
        ],
      },
      {
        chapter_name: "Kinetic Theory of Gases",
        total_videos: "55",
        total_tests: "4",
        notes: "20 pages",
        topics: [
          "Kinetic theory",
          "Gas laws",
          "Mean free path",
          "Specific heat capacity",
          "Thermal conductivity",
        ],
      },
      {
        chapter_name: "Oscillations and Waves",
        total_videos: "100",
        total_tests: "6",
        notes: "28 pages",
        topics: [
          "Simple harmonic motion",
          "Damped oscillations",
          "Wave motion",
          "Wave properties",
          "Superposition principle",
        ],
      },
      {
        chapter_name: "Electrostatics",
        total_videos: "90",
        total_tests: "5",
        notes: "24 pages",
        topics: [
          "Coulomb's law",
          "Electric field",
          "Gauss's law",
          "Electric potential",
          "Capacitance",
        ],
      },
      {
        chapter_name: "Current Electricity",
        total_videos: "80",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Electric current",
          "Ohm's law",
          "Kirchhoff's laws",
          "Electrical resistance",
          "Electromotive force",
        ],
      },
      {
        chapter_name: "Magnetic Effects of Current and Magnetism",
        total_videos: "85",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Magnetic field",
          "Magnetic force",
          "Magnetic flux",
          "Ampere's law",
          "Faraday's law",
        ],
      },
      {
        chapter_name: "Electromagnetic Induction and Alternating Currents",
        total_videos: "75",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Electromagnetic induction",
          "Faraday's law",
          "Lenz's law",
          "Alternating current",
          "Transformers",
        ],
      },
      {
        chapter_name: "Electromagnetic Waves",
        total_videos: "60",
        total_tests: "3",
        notes: "20 pages",
        topics: [
          "Electromagnetic spectrum",
          "Maxwell's equations",
          "Properties of electromagnetic waves",
          "Applications of electromagnetic waves",
          "Electromagnetic radiation",
        ],
      },
      {
        chapter_name: "Ray Optics",
        total_videos: "70",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Reflection",
          "Refraction",
          "Total internal reflection",
          "Lens",
          "Optical instruments",
        ],
      },
      {
        chapter_name: "Wave Optics",
        total_videos: "80",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Interference",
          "Diffraction",
          "Polarization",
          "Huygen's principle",
          "Young's double slit experiment",
        ],
      },
      {
        chapter_name: "Dual Nature of Matter and Radiation",
        total_videos: "65",
        total_tests: "4",
        notes: "20 pages",
        topics: [
          "Particle nature of light",
          "Wave-particle duality",
          "Photoelectric effect",
          "De Broglie wavelength",
          "Davisson-Germer experiment",
        ],
      },
      {
        chapter_name: "Atoms and Nuclei",
        total_videos: "70",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Atomic structure",
          "Bohr model",
          "Radioactivity",
          "Nuclear reactions",
          "Nuclear fission and fusion",
        ],
      },
      {
        chapter_name: "Electronic Devices",
        total_videos: "75",
        total_tests: "5",
        notes: "24 pages",
        topics: [
          "Semiconductors",
          "Diodes",
          "Transistors",
          "Logic gates",
          "Integrated circuits",
        ],
      },
      {
        chapter_name: "Communication Systems",
        total_videos: "80",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Elements of communication systems",
          "Propagation of electromagnetic waves",
          "Antennas",
          "Modulation",
          "Amplitude modulation",
        ],
      },
    ],
    // chemistry
    chemistry: [
      {
        chapter_name: "Basic Concepts of Chemistry",
        total_videos: "50",
        total_tests: "3",
        notes: "20 pages",
        topics: [
          "Laws of chemical combination",
          "Dalton's atomic theory",
          "Atomic and molecular masses",
          "Mole concept",
          "Empirical and molecular formulae",
        ],
      },
      {
        chapter_name: "Structure of Atom",
        total_videos: "60",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Discovery of electron, proton, and neutron",
          "Atomic models",
          "Bohr's model",
          "Dual nature of matter and radiation",
          "Quantum numbers",
        ],
      },
      {
        chapter_name:
          "Classification of Elements and Periodicity in Properties",
        total_videos: "70",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Modern periodic law",
          "Types of elements",
          "Periodic trends",
          "Electronic configuration",
          "Periodic properties",
        ],
      },
      {
        chapter_name: "Chemical Bonding and Molecular Structure",
        total_videos: "60",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Ionic bond",
          "Covalent bond",
          "Molecular orbital theory",
          "VSEPR theory",
          "Hydrogen bonding",
        ],
      },
      {
        chapter_name: "States of Matter: Gases and Liquids",
        total_videos: "80",
        total_tests: "5",
        notes: "24 pages",
        topics: [
          "Gas laws",
          "Kinetic theory of gases",
          "Liquid state",
          "Intermolecular forces",
          "Vapour pressure",
        ],
      },
      {
        chapter_name: "Thermodynamics",
        total_videos: "75",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Thermal equilibrium",
          "Zeroth law of thermodynamics",
          "First law of thermodynamics",
          "Second law of thermodynamics",
          "Heat engines",
        ],
      },
      {
        chapter_name: "Equilibrium",
        total_videos: "85",
        total_tests: "6",
        notes: "28 pages",
        topics: [
          "Types of equilibrium",
          "Law of chemical equilibrium",
          "Equilibrium constant",
          "Le Chatelier's principle",
          "Factors affecting equilibrium",
        ],
      },
      {
        chapter_name: "Redox Reactions",
        total_videos: "70",
        total_tests: "4",
        notes: "20 pages",
        topics: [
          "Oxidation-reduction reactions",
          "Balancing redox reactions",
          "Electrochemical cells",
          "Nernst equation",
          "Corrosion",
        ],
      },
      {
        chapter_name: "Hydrogen",
        total_videos: "65",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Position of hydrogen in periodic table",
          "Isotopes of hydrogen",
          "Hydrides",
          "Water",
          "Hydrogen peroxide",
        ],
      },
      {
        chapter_name: "s-Block Elements (Alkali and Alkaline Earth Metals)",
        total_videos: "75",
        total_tests: "5",
        notes: "24 pages",
        topics: [
          "Group 1 elements",
          "Group 2 elements",
          "Properties and reactions",
          "Anomalous properties",
          "Uses of alkali and alkaline earth metals",
        ],
      },
      {
        chapter_name: "p-Block Elements",
        total_videos: "80",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Group 13-18 elements",
          "Electronic configuration",
          "Trends in properties",
          "Reactions of p-block elements",
          "Uses of p-block elements",
        ],
      },
      {
        chapter_name:
          "Organic Chemistry - Some Basic Principles and Techniques",
        total_videos: "65",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Hybridization",
          "Isomerism",
          "Types of organic reactions",
          "Purification of organic compounds",
          "Qualitative analysis",
        ],
      },
      {
        chapter_name: "Hydrocarbons",
        total_videos: "70",
        total_tests: "4",
        notes: "20 pages",
        topics: [
          "Classification of hydrocarbons",
          "Alkanes",
          "Alkenes",
          "Alkynes",
          "Aromatic hydrocarbons",
        ],
      },
      {
        chapter_name: "Environmental Chemistry",
        total_videos: "80",
        total_tests: "5",
        notes: "24 pages",
        topics: [
          "Environmental pollutants",
          "Air pollution",
          "Water pollution",
          "Soil pollution",
          "Green chemistry",
        ],
      },
    ],
    // mathematics
    maths: [
      {
        chapter_name: "Sets, Relations, and Functions",
        total_videos: "80",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Sets and their representations",
          "Union, intersection, and complement of sets",
          "Relations and functions",
          "Types of relations",
          "Types of functions",
        ],
      },
      {
        chapter_name: "Complex Numbers and Quadratic Equations",
        total_videos: "90",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Complex numbers",
          "Algebra of complex numbers",
          "Quadratic equations",
          "Roots of quadratic equations",
          "Nature of roots",
        ],
      },
      {
        chapter_name: "Matrices and Determinants",
        total_videos: "75",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Matrices",
          "Types of matrices",
          "Operations on matrices",
          "Determinants",
          "Properties of determinants",
        ],
      },
      {
        chapter_name: "Permutations and Combinations",
        total_videos: "85",
        total_tests: "6",
        notes: "28 pages",
        topics: [
          "Fundamental principle of counting",
          "Permutations",
          "Combinations",
          "Binomial theorem",
          "Applications of permutations and combinations",
        ],
      },
      {
        chapter_name: "Mathematical Induction",
        total_videos: "70",
        total_tests: "4",
        notes: "20 pages",
        topics: [
          "Principle of mathematical induction",
          "Inductive step",
          "Applications of mathematical induction",
          "Strong induction",
          "Recursive definitions and formulas",
        ],
      },
      {
        chapter_name: "Binomial Theorem and its Simple Applications",
        total_videos: "65",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Binomial theorem for positive integral indices",
          "Binomial theorem for any index",
          "Binomial coefficients",
          "Applications of binomial theorem",
        ],
      },
      {
        chapter_name: "Sequences and Series",
        total_videos: "75",
        total_tests: "5",
        notes: "24 pages",
        topics: [
          "Arithmetic progression",
          "Geometric progression",
          "Sum of n terms",
          "Special series",
          "Infinite series",
        ],
      },
      {
        chapter_name: "Limits, Continuity, and Differentiability",
        total_videos: "80",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Limits",
          "Continuity",
          "Differentiability",
          "Derivatives",
          "Rolle's theorem and mean value theorem",
        ],
      },
      {
        chapter_name: "Integral Calculus",
        total_videos: "65",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Indefinite integrals",
          "Definite integrals",
          "Integration by parts",
          "Integration by substitution",
          "Properties of integrals",
        ],
      },
      {
        chapter_name: "Differential Equations",
        total_videos: "70",
        total_tests: "4",
        notes: "20 pages",
        topics: [
          "Ordinary differential equations",
          "Formation of differential equations",
          "Solutions of differential equations",
          "Variables separable method",
          "Homogeneous differential equations",
        ],
      },
      {
        chapter_name: "Coordinate Geometry",
        total_videos: "80",
        total_tests: "5",
        notes: "24 pages",
        topics: [
          "Straight lines",
          "Circles",
          "Conic sections",
          "Parabola",
          "Ellipse and hyperbola",
        ],
      },
      {
        chapter_name: "Three Dimensional Geometry",
        total_videos: "75",
        total_tests: "5",
        notes: "24 pages",
        topics: [
          "Coordinates in space",
          "Distance between two points",
          "Section formula",
          "Direction cosines and direction ratios",
          "Equation of a straight line in space",
        ],
      },
      {
        chapter_name: "Vector Algebra",
        total_videos: "80",
        total_tests: "5",
        notes: "25 pages",
        topics: [
          "Vector addition",
          "Scalar multiplication",
          "Dot and cross products",
          "Scalar and vector triple products",
          "Applications of vectors",
        ],
      },
      {
        chapter_name: "Statistics and Probability",
        total_videos: "70",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Measures of central tendency",
          "Measures of dispersion",
          "Probability",
          "Random variables",
          "Binomial distribution",
        ],
      },
      {
        chapter_name: "Trigonometry",
        total_videos: "75",
        total_tests: "4",
        notes: "22 pages",
        topics: [
          "Trigonometric ratios",
          "Trigonometric identities",
          "Trigonometric equations",
          "Properties of triangles",
          "Height and distance",
        ],
      },
    ],
  };
  const img = {
    physics: "/assests/p.png",
    chemistry: "/assests/che.png",
    maths: "/assests/m.png",
  };
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastWord = parts[parts.length - 1];

  return (
    <div>
      <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {syllabus[lastWord]?.map((data, index) => {
          const chapterName = data.chapter_name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
          return (
            <Link key={index} href={`/s/${lastWord}/${chapterName}`}>
              <div
                key={index}
                className="flex justify-between items-center mx-2 md:my-5 my-3 shadow-lg rounded-lg bg-slate-200"
              >
                <div className="flex justify-start items-center p-2 gap-2  ">
                  <Image
                    alt={lastWord}
                    src={img[lastWord]}
                    width={40}
                    height={40}
                  />
                  <p>{data.chapter_name}</p>
                </div>
                <MdKeyboardArrowRight size={25} className="mr-2" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectPage;
