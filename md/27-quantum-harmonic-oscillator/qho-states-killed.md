# QHO States killed
Let all the variables in [[quantum-harmonic-oscillator]]

Let
$$
\ket{n}\triangleq\ket{\phi_n}\quad\forall \quad n\in \mathbb{Z}^+
$$
Note that $\phi(x)$ is a [[wave-function|wave function]] and, due to the definition, that

$$
\phi_0(x)=\braket{x|0}
$$

We must find $\phi_0(x)$ as we don't know it. We do this by projecting. 
Project into position basis by $\hat{x}\rightarrow x, \hat{p}\rightarrow -i\hbar \frac{d}{dx}$

$$
\frac{1}{\sqrt{2}}\left(\frac{x}{\alpha} + \frac{i\alpha}{\hbar}\cdot\frac{\hbar}{i}\frac{d}{dx}\right)\phi_0(x) = 0
$$
$$
\Rightarrow\quad\frac{1}{\sqrt{2}}\left(\frac{x}{\alpha}+\alpha\frac{d}{dx}\right)\phi_0=0
$$
$$
\Leftrightarrow\quad \frac{d\phi_0}{dx} = -\frac{x}{\alpha^2}\phi_0(x)
$$
This is seperable first-order ODE. Integrating gives
$$
\phi_0(x) = N_0\, e^{-x^2/2\alpha^2}, \qquad N_0 = \frac{1}{(\pi\alpha^2)^{1/4}}
$$
This means there there is a unique solution and therefore no [[degeneracy]].

Note
1. Note
$$
\hat{a}^\dagger\ket{0} = \sqrt{0+1}\,\ket{1} = \ket{1}
$$
2. Note
$$
\hat{a}^\dagger\ket{1} = \sqrt{1+1}\,\ket{2} = \sqrt{2}\,\ket{2}
$$
3. Generally
$$
\hat{a}^\dagger\ket{n} = \sqrt{n+1}\,\ket{n+1}, \qquad \hat{a}\ket{n} = \sqrt{n}\,\ket{n-1}
$$

4. Note
$$
\ket{n} = \frac{1}{\sqrt{n!}}\,(\hat{a}^\dagger)^n\ket{0}
$$
5. Note
$$
\hat{a}^\dagger\hat{a}\ket{n} = n\ket{n}, \qquad \braket{m|n} = \delta_{mn}
$$
