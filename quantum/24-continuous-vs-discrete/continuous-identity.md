For discrete [[basis-state|basis]]:

$$
I=\sum_n\ket{n}\bra{n}
$$

Think about how this just creates a $n\times n$ diagonal [[matrix|matrix]] with 1's in it.

For a [[non-denumerable-basis|continuous]] basis:

$$
I=\int\ket{x}\bra{x}~dx
$$

Note:
1. note

$$
I\ket{x} = \int_{-\infty}^\infty \ket{x'}\braket{x'|x}dx'=\int_{-\infty}^\infty \ket{x'}\delta(x-x')dx'=\ket{x}
$$

2. Note

$$
\bra{x}I\ket{\psi}=\int_{-\infty}^\infty \braket{x|x'}\braket{x'|\psi}dx 
$$

$$
=\int_{-\infty}^\infty \delta (x-x')\psi(x')dx'
$$

$$
=\psi(x)=\braket{x|\psi}
$$

3. Note

$$
\braket{\phi|\psi}=\int\braket{\phi|x}\braket{x|\psi}dx
$$

$$
=\int\phi^*(x)\psi (x)~(dx)
$$
