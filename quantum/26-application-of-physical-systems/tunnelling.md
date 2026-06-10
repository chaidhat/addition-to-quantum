# Tunnelling
Tunnelling is a phenomenon caused when energy goes negative.

Recall [[time-independent-schrodinger-equation|TISE]]

$$
\left[-\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x)\right]\phi(x) = E\,\phi(x)
$$

Let there be a 1D potential with an interaction zone between $x_L$ and $x_R$ asymptoting to constant $V_L$ and $V_R$ outside. Energy is kinetic + potential

Classically,

$$
E\geq V
$$

In quantum mechanics,

$$
E\geq V_{min}
$$

but tunneling allows $E<V$ locally

Looking at TISE above,

$$
\frac{d^2\phi}{dx^2} = -\frac{2m(E-V(x))}{\hbar^2}\phi
$$

This is a second order ODE

Classically,
The allowed region $E-V(x)>0$
This means solution oscillates around 0

$$
\phi(x) = e^{\pm ikx}, \qquad k = \sqrt{\frac{2m(E-V)}{\hbar^2}}
$$

The forbidden region $E-V(x)<0$
This causes the solution curve to exponentially grow or decay. A classic particle can't be here due to negative KE but QM allows a decaying [[wave-function]] known as tunneling

$$
\phi(x) = e^{\pm bx}, \qquad b = \sqrt{\frac{2m(V-E)}{\hbar^2}}
$$
