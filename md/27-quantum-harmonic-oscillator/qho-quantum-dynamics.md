The [[quantum-dynamics]] of a [[quantum-harmonic-oscillator]]. Let all the variable from there

We know that from [[heisenberg-picture]]
$$
\hat{O}_H(t) = U^\dagger(t)\,\hat{O}\,U(t)
$$
Where $\hat{O}$ is any [[observable|observable]], $\hat{O}_H$ is the Heisenberg picture operator.

### Position Evolution
The position evolves like this
$$
\frac{d}{dt}\hat{x}_H = \tfrac{i}{\hbar}[\hat{H}_H, \hat{x}_H] = \tfrac{i}{\hbar}\left[\tfrac{\hat{p}_H^2}{2m}, \hat{x}_H\right]
$$
we know $\hat{p}$ commutes with $\hat{x}$. use (via [[commutator]])
$$
[\hat{p}^2,\hat{x}]=2\hat{p}[\hat{p},\hat{x}]=-2i\hbar\hat{p}
$$
so
$$
\frac{d}{dt}\hat{x}_H = \tfrac{i}{2m\hbar}\cdot(-2i\hbar\hat{p}_H) = \tfrac{\hat{p}_H}{m}
$$
this is already 

### Momentum Evolution
The momentum evolves like this
$$
\frac{d}{dt}\hat{p}_H = \tfrac{i}{\hbar}\left[\tfrac{1}{2}m\omega^2\hat{x}_H^2, \hat{p}_H\right]
$$
We know $[\hat{x}^2,\hat{p}]=2i\hbar\hat{x}$ so
$$
\frac{d}{dt}\hat{p}_H = -m\omega^2\hat{x}_H(t)
$$

### Decouple
We know that
$$
\frac{d\hat{x}_H}{dt} = \tfrac{\hat{p}_H}{m}, \qquad \frac{d\hat{p}_H}{dt} = -m\omega^2\hat{x}_H
$$
so
$$
\frac{d^2\hat{x}_H}{dt^2} = -\omega^2\hat{x}_H(t)
$$
Solving this ODE yields a form
$$
\hat{x}_H(t) = \hat{A}\cos(\omega t) + \hat{B}\sin(\omega t)
$$
$$
\hat{p}_H(t) = m\frac{d\hat{x}_H}{dt} = m\omega\left[-\hat{A}\sin(\omega t) + \hat{B}\cos(\omega t)\right]
$$
so
$$
\hat{x}_H(0) = \hat{x}, \quad \hat{p}_H(0) = \hat{p} \implies \hat{A} = \hat{x}, \quad \hat{B} = \tfrac{\hat{p}}{m\omega}
$$
so
$$
\boxed{\hat{x}_H(t) = \hat{x}\cos(\omega t) + \tfrac{\hat{p}}{m\omega}\sin(\omega t)}
$$
$$
\boxed{\hat{p}_H(t) = \hat{p}\cos(\omega t) - m\omega\,\hat{x}\sin(\omega t)}
$$
