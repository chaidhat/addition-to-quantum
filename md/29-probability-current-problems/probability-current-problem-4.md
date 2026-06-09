We are going to look at a problem

$$
V(x) = -V_0\,\delta(x), \qquad V_0 > 0
$$

Where $\delta(x)$ is the [[dirac-delta]]
Describe the $J(x)$ of the particle in all states

Write the [[time-independent-schrodinger-equation|TISE]] 

$$
-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2} - V_0\,\delta(x)\,\phi = E\phi
$$

away from origin the delta term vanished

$$
\frac{d^2\phi}{dx^2} = \kappa^2\phi, \qquad \kappa \equiv \frac{\sqrt{-2mE}}{\hbar}
$$

Since $E<0$, $\kappa$ is real and positive.

$$
\frac{d^2\phi}{dx^2} = \kappa^2\phi, \qquad \kappa \equiv \frac{\sqrt{-2mE}}{\hbar}
$$

so

$$
\phi(x) = \begin{cases} A e^{\kappa x} & x < 0 \\ B e^{-\kappa x} & x > 0 \end{cases}
$$
