# Degrees of Freedom

A [[ket-state|state]] $\ket{\psi}\in H$ of a [[spin-12-systems||quantum particles]] is a [[vectors|vector]] in [[complex-number|complex]] [[hilbert-spaces||Hilbert space]]. 

Generally a particle has multiple degrees of freedom
$$
H=H_{space}\otimes H_{spin} \otimes ...
$$

$H_{space}$ has continuous degrees of freedom -> infinite-dimensional
$H_{spin}$ has discrete degrees of freedom -> finite-dimensional

E.g., electron in space or confined in a box or a quantum well

# Finite Dimension Hilbert Space

Example
$H_{spin}$ only has $\left\{\pm\frac{\hbar}{2}\right\}$ or $\{+\hbar, 0, -\hbar\}$
The spin can be described by
$$
\ket{\psi_{spin}}=\sum_{n=0}^{d-1}\psi_n\ket{n}\quad\in\quad \mathbb{C}^d
$$
Inner product
Note the use of [[cases]]
$$
\braket{n|m}=\delta_{nm}=\begin{cases}0&n\neq m\\1&n=m\end{cases}
$$
$$
\braket{\phi_{spin}|\psi_{spin}}=\sum_{n=0}^{d-1}|\psi_n|^2
$$
Normalization
$$
1=\braket{\psi_{spin}|\psi_{spin}}=\sum_{n=0}^{d-1}|\psi_n|^2
$$
Measurement [[probability-theory|probability]]: Born's rule
$$
Pr(n)=|\psi_n|^2
$$
## Infinite Dimension Hilbert Space

See [[non-denumerable-basis]]
Example
$H_{space}$ has $x\in\mathbb{R}^d$

$$
\ket{\psi_{space}}=\sum_{k=-N}^N\psi_k \ket{k}=\sum_{k=-N}^N\frac{\psi_k}{\sqrt{\Delta x}}\frac{\ket{k}}{\sqrt{\Delta x}}
\Delta x$$
$$
=\sum_{x_k=-L}^L\psi(x_k)\ket{x_k}\Delta x
$$
Using Riemann sums from [[integration]] 
$$
1 = \sum_k |\psi_k|^2 = \sum_k |\psi(x_k)|^2\,\Delta x \xrightarrow{\Delta x \to 0} \int |\psi(x)|^2\, dx
$$

Note this is called a [[wave-function]]
It's like a [[function|function]] that outputs the eigen"values" of the output

inner product
$$
\braket{\phi_{space}|\psi_{space}}=\int \phi^*(x)\psi(x)dx
$$
normalization 
$$
1=\braket{\psi_{space}|\psi_{space}}=\int|\psi(x)|^2dx
$$
Measurement probability
$$
Pr(x\in[a,b])=\int_a^b |\psi(x)|^2dx
$$
See [[probability-density]]
## Note
Note that
$$
\ket{\vec{x}}\neq\vec{x}
$$
LHS: infinity dimension $H$ state vector
RHS: finite-dim $\mathbb{R}$  $H$ state vector

$$
\ket{\alpha \vec{x}}\neq \alpha\ket{\vec{x}}
$$
$$
\ket{-\vec{x}}\neq -\ket{\vec{x}}
$$
