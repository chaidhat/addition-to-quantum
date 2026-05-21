# Ehrenfest Theorem

Given [<span class="underline">observable</span>](#observables) $\hat{A}$, recall the [<span class="underline">expectation value</span>](#expected-value-of-observables) of $\hat{A}$ is
$$\mathbb{E}[A(t)]=\left\langle \psi(t) \right\rvert A(t)\left\lvert \psi(t) \right\rangle$$
If we [<span class="underline">differentiate</span>](#differentiation) w.r.t time
$$\frac{d}{dt}\mathbb{E}[A(t)]=\left(\frac{d}{dt}\left\langle \psi(t) \right\rvert\right)A(t)\left\lvert \psi(t) \right\rangle+\left\langle \psi(t) \right\rvert A(t)\left(\frac{d}{dt}\left\lvert \psi(t) \right\rangle\right)$$
$$= -\frac{1}{i\hbar}\left\langle \psi \right\rvert HA\left\lvert \psi \right\rangle+\left\langle \psi \right\rvert A\frac{1}{i\hbar}H\left\lvert \psi \right\rangle$$
because [<span class="underline">commutator</span>](#commutators),
$$=\frac{i}{\hbar}\left\langle \psi \right\rvert[H,A]\left\lvert \psi \right\rangle$$

Ehrenfest theorem

$$\boxed{\frac{d}{dt}\mathbb{E}[A(t)]=\frac{i}{\hbar}\mathbb{E}\left[[H,A]\right]}$$

Remarks

1.  If $[H,A]=0$, then $\frac{d}{dt}\mathbb{E}[A(t)]=0$
    The [<span class="underline">expected value</span>](#expected-value-of-observables) of A is conserved if A and H are [<span class="underline">compatible</span>](#compatibility). For example, energy H is always conserved in an [<span class="underline">isolated system</span>](#isolated-system)!

2.  Sometimes convientn to change basis to Heisenberg picture to study observable dynamics
