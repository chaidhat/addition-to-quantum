Used for estimating ground state energies

Take any normalized state $\ket{\psi}$. Take it's Hamiltonian

$$
\hat{H} = \sum_n E_n \ket{\phi_n}\bra{\phi_n}
$$

$$
\braket{\psi | \hat{H} | \psi} = \sum_n E_n \braket{\psi|\phi_n}\braket{\phi_n|\psi} = \sum_n E_n\,P(n)
$$

$$
\sum_n E_n\,P(n) \geq \sum_n E_0\,P(n) = E_0 \sum_n P(n) = E_0
$$

$$
\braket{\psi | \hat{H} | \psi} \geq E_0 \quad \forall\ \text{normalized } \ket{\psi}
$$

But now you need to determine ground energy $E_0$

1. Choose a family of trial states $\ket{\psi_alpha}$ parameterized by one or more params $\alpha$.
2. compute energy as function
$$
E(\alpha)=\bra{\psi_\alpha}\hat{H}\ket{\psi_\alpha}
$$
3. Minimize over $\alpha$ the best estimate is
$$
E_\text{min} = \min_\alpha E(\alpha) \geq E_0
$$

To reach the first excited state $E_1$ by restricting the trial state be ortho to the ground state

$$
\braket{\phi_0 | \psi_\alpha} = 0 \;\Rightarrow\; \braket{\psi_\alpha | \hat{H} | \psi_\alpha} \geq E_1
$$

A trial state is a guess for the ground state that you build yourself with one or more free parameters baked in. e.g.,

$$
\psi_\alpha(x) = \left(\frac{2\alpha}{\pi}\right)^{1/4} e^{-\alpha x^2}
$$

# Example

## Gaussian Trial State

These are some trial states

$$
\psi_\alpha(x) = C_\alpha\,e^{-\alpha^2 x^2}, \qquad C_\alpha = \left(\frac{2\alpha^2}{\pi}\right)^{1/4}
$$

Using that trial state, prove KE

$$
\braket{\psi_\alpha | \tfrac{\hat{p}^2}{2m} | \psi_\alpha} = \frac{\hbar^2\alpha^2}{2m}
$$

## Triangular Trial State

$$
\psi_\alpha(x) = \begin{cases} C_\alpha(1 - \alpha|x|) & |x| \leq 1/\alpha \\ 0 & |x| > 1/\alpha \end{cases}, \qquad C_\alpha = \sqrt{\frac{3\alpha}{2}}
$$

$$
\frac{d}{dx}|x| = \begin{cases}0&x<0\\1&x\geq 0\end{cases}
$$
where sgn is the step function
where delta is [[dirac-delta]]
$$
\frac{d^2}{dx^2}|x| = 2\delta(x)
$$
Prove KE

$$
\braket{\psi_\alpha|\tfrac{\hat p^2}{2m}|\psi_\alpha} = -\frac{\hbar^2}{2m}\int_{-\infty}^{\infty}\psi_\alpha^*(x)\,\frac{d^2}{dx^2}\psi_\alpha(x)\,dx
$$

$$
= -\frac{\hbar^2}{2m}\int_{-\infty}^{\infty}\psi_\alpha^*(x)\,C_\alpha\big(-2\alpha\,\delta(x)\big)\,dx
$$

$$
= \frac{\hbar^2}{2m}\,2\alpha\,|C_\alpha|^2 = \frac{\hbar^2}{2m}\,2\alpha\cdot\frac{3\alpha}{2} = \frac{3\hbar^2\alpha^2}{2m}
$$
# Application

$$
V(x) = \tfrac{1}{2}kx^2, \qquad \omega = \sqrt{\frac{k}{m}}
$$

$$
E_0 = \tfrac{1}{2}\hbar\omega
$$

## Gaussian Trial States
$$
\psi_\alpha = C_\alpha e^{-\alpha^2 x^2}, \qquad C_\alpha^2 = \sqrt{\frac{2\alpha^2}{\pi}}
$$

$$
\braket{V(\hat x)} = \int_{-\infty}^{\infty}|\psi_\alpha(x)|^2\,\frac{kx^2}{2}\,dx = \frac{k}{8\alpha^2}
$$

$$
\braket{x^2} = \frac{1}{4\alpha^2}
$$

$$
E(\alpha) = \frac{\hbar^2\alpha^2}{2m} + \frac{k}{8\alpha^2}
$$

Minimize

$$
0 = \frac{d}{d\alpha}E = \frac{\hbar^2\alpha}{m} - \frac{k}{4\alpha^3}
$$

$$
\frac{\hbar^2\alpha}{m} = \frac{k}{4\alpha^3} \;\Rightarrow\; \alpha^4 = \frac{km}{4\hbar^2} \;\Rightarrow\; \alpha = \left(\frac{km}{4\hbar^2}\right)^{1/4}
$$

$$
\min_\alpha E(\alpha) = \frac{1}{2}\hbar\sqrt{\frac{k}{m}} = \tfrac{1}{2}\hbar\omega
$$
## Triangular Trial States

$$
\braket{V(\hat x)} = k\,|C_\alpha|^2\int_{0}^{1/\alpha}x^2(1-\alpha x)^2\,dx = \frac{k}{20\alpha^2}
$$

$$
E(\alpha) = \frac{3\hbar^2\alpha^2}{2m} + \frac{k}{20\alpha^2}
$$

Minimize

$$
\alpha^4 = \frac{km}{30\hbar^2}
$$

$$
\min_\alpha E(\alpha) = \sqrt{\frac{3}{10}}\,\hbar\omega \approx 0.548\,\hbar\omega
$$

## Guesses

True ground is $0.5\hbar \omega$
Gaussian estimate is $0.5\hbar \omega$
Triangular estimate is $0.548\hbar \omega$



