# QHO Wave Function
Let all the variables in [[quantum-harmonic-oscillator]]
### Ground State

Recall that $\phi_n(x)$ is the position-space wave function of the $n$-th energy eigenstate.

We start with

$$
\hat{a}\ket{0}=0
$$

that implies

$$
\ket{n}\triangleq\ket{\phi_n}\quad\forall\quad n\in \mathbb{Z}^+
$$

via [[wave-function]] definition

$$
\phi_n(x)=\braket{x|n}
$$

so

$$
\bra{x}\hat{a}\ket{0}=\bra{x}0
$$

$$
\bra{x}\hat{a}\ket{0}=0
$$

$$
\bra{x}\left[\frac{1}{\sqrt{2}}\left(\frac{\hat{x}}{\alpha} + \frac{i\alpha}{\hbar}\hat{p}\right)\right]\ket{0} = 0
$$

$$
\frac{1}{\sqrt{2}}\left[\frac{1}{\alpha}\bra{x}\hat{x}\ket{0} + \frac{i\alpha}{\hbar}\bra{x}\hat{p}\ket{0}\right] = 0
$$

Note that due to 

$$
\bra{x}\hat{x}=x\bra{x}
$$

$$
\bra{x}\hat{p}=-i\hbar \frac{d}{dx}\bra{x}
$$

Then

$$
\frac{1}{\sqrt{2}}\left[\frac{x}{\alpha}\,\phi_0(x) + \frac{i\alpha}{\hbar}\cdot\left(-i\hbar\right)\frac{d\phi_0}{dx}\right] = 0
$$

This ODE evaluates to

$$
\frac{1}{\sqrt{2}}\left(\frac{x}{\alpha} + \alpha\frac{d}{dx}\right)\phi_0(x) = 0
$$

This is [[gaussian-distribution|Gaussian]] as

$$
\left(\frac{x}{\alpha} + \alpha \frac{d}{dx}\right)\phi_0 = 0 \implies \frac{d\phi_0}{dx} = -\frac{x}{\alpha^2}\phi_0
$$

This is a separable ODE with an exponential of $-x^2/2\alpha^2$ hence it fits within the Gaussian form $A\, e^{-(x-x_0)^2 / 2\sigma^2}$.

### First Excited State
The first excited state 

$$
\ket{1} = \hat{a}^\dagger \ket{0}
$$

$$
\phi_1(x) = \tfrac{1}{\sqrt{2}}\left(\tfrac{\hat{X}}{\alpha} - \tfrac{i\alpha}{\hbar}\hat{P}\right)\phi_0(x)
$$

$$
= \tfrac{1}{\sqrt{2}}\left(\tfrac{x}{\alpha} - \alpha\tfrac{d}{dx}\right)\phi_0
$$

$$
= N_1\, x\, e^{-x^2/2\alpha^2}, \quad N_1 
$$

$$
= \tfrac{\sqrt{2}}{\alpha}N_0
$$

