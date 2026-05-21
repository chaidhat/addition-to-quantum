# Ehrenfest Theorem

Given [[observables|observable]] $\hat{A}$, recall the [[expected-value-of-observables|expectation value]] of $\hat{A}$ is
$$\mathbb{E}[A(t)]=\left\langle \psi(t) \right\rvert A(t)\left\lvert \psi(t) \right\rangle$$
If we [[differentiation|differentiate]] w.r.t time
$$\frac{d}{dt}\mathbb{E}[A(t)]=\left(\frac{d}{dt}\left\langle \psi(t) \right\rvert\right)A(t)\left\lvert \psi(t) \right\rangle+\left\langle \psi(t) \right\rvert A(t)\left(\frac{d}{dt}\left\lvert \psi(t) \right\rangle\right)$$
$$= -\frac{1}{i\hbar}\left\langle \psi \right\rvert HA\left\lvert \psi \right\rangle+\left\langle \psi \right\rvert A\frac{1}{i\hbar}H\left\lvert \psi \right\rangle$$
because [[commutators|commutator]],
$$=\frac{i}{\hbar}\left\langle \psi \right\rvert[H,A]\left\lvert \psi \right\rangle$$

Ehrenfest theorem

$$\boxed{\frac{d}{dt}\mathbb{E}[A(t)]=\frac{i}{\hbar}\mathbb{E}\left[[H,A]\right]}$$

Remarks

1.  If $[H,A]=0$, then $\frac{d}{dt}\mathbb{E}[A(t)]=0$
    The [[expected-value-of-observables|expected value]] of A is conserved if A and H are [[compatibility|compatible]]. For example, energy H is always conserved in an [[isolated-system]]!

2.  Sometimes convientn to change basis to Heisenberg picture to study observable dynamics
