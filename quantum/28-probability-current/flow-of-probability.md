
Let [[probability-density]] $\rho$ and wave function $\psi=\psi(x,t)$ be

$$
\rho=\psi^*\psi=|\psi|^2
$$

Differentiate w.r.t time via product rule

$$
\frac{\partial}{\partial t}(\psi^*\psi) = \frac{\partial\psi^*}{\partial t}\psi + \psi^*\frac{\partial\psi}{\partial t}
$$

via [[schrodinger-hamiltonian-ii]] we know

$$
i\hbar\frac{\partial \psi}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2 \psi}{\partial x^2} + V\psi
$$

$$
\frac{\partial\psi}{\partial t} = \frac{1}{i\hbar}\left[-\frac{\hbar^2}{2m}\frac{\partial^2\psi}{\partial x^2} + V\psi\right]
$$

$$
\frac{\partial\psi^*}{\partial t} = -\frac{1}{i\hbar}\left[-\frac{\hbar^2}{2m}\frac{\partial^2\psi^*}{\partial x^2} + V\psi^*\right]
$$

where $V(x)$ is the potential energy and $x$ is the position along one dimension.

so the $V(x)$ terms cancel leaving kinetic pieces

$$
\frac{\partial\rho}{\partial t} = -\frac{i\hbar}{2m}\left[\frac{\partial^2\psi^*}{\partial x^2}\psi - \psi^*\frac{\partial^2\psi}{\partial x^2}\right]
$$

Recall the [[probability-current]]

This causes

$$
\frac{\partial \rho}{\partial t}=-\frac{\partial J}{\partial x}
$$

$$
\Rightarrow\quad \boxed{\frac{\partial}{\partial t}|\psi (x,t)|^2=-\frac{\partial J}{\partial x}}
$$

This means that probability is locally conserved. It can't appear or vanish, only flow.