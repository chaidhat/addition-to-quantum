# Position Operator
It is a [[continuous-operator]] that represents the position of a particle
In the position basis:
$$
(\hat{x}\psi)(x)\rightarrow x\psi(x)
$$

Note that
$$
\hat{x}=\int x\ket{x}\bra{x}dx
$$
check:
$$
\hat{x}\ket{x} = \int x'\,\ket{x'}\braket{x'|x}\, dx'
$$
This uses the principle in the first note of [[dirac-delta-function]]
$$
= \int x'\,\ket{x'}\,\delta(x'-x)\, dx'
$$
Because this only fires at $x'=x$, we're only going to evaluate $x'\ket{x'}$ at $x$. Hence
$$
=x\ket{x}
$$
### Properties
1. Note
$$
f(\hat{x})\ket{x} = f(x)\ket{x}
$$
2. Note
$$
\bra{x}f(\hat{x}) = f(x)\bra{x}
$$
3. Note
$$
\bra{\psi}f(\hat{x})\ket{\psi} = \int f(x)\,|\psi(x)|^2\, dx = \int f(x)\,P_\psi(x)\, dx
$$
4. Note
$$
\bra{x}\hat{x}\ket{\psi} = x\braket{x|\psi} = x\,\psi(x)
$$
