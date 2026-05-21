# Unitary Evolution

Postulates of an [[isolated-system]]:

1.  $U(t_2,t_1)$ should be independent of initial state.
    $$\alpha\left\lvert \psi \right\rangle+\beta\left\lvert \phi \right\rangle\rightarrow U(t_2,t_1)(\alpha\left\lvert \psi \right\rangle+\beta\left\lvert \phi \right\rangle)=$$

2.  must preserve [[probability-theory|probablity]] (must sum to 1) if isolated which means $U$ must be [[unitary-operator|unitary]] if [[hilbert-spaces|Hilbert space]] is finite dimensional.

3.  assume $U$ is unitary in infinite dimensional Hilbert space.

Unpacking 2. we see that
$$\left\langle \psi|\psi \right\rangle=1$$
This is because [[borns-rule]] says that, over $\left\lvert k \right\rangle$ basis states,
$$\sum_k |\left\langle k|\psi \right\rangle|^2=1$$
as probability must sum to 1.
Using [[absolute-value-of-complex-number|this lemma]], we get
$$\sum_k|\left\langle k|\psi \right\rangle|^2=\sum_k\left\langle \psi|k \right\rangle\left\langle k|\psi \right\rangle=\left\langle \psi \right\rvert\left(\sum_k\left\lvert k \right\rangle\left\langle k \right\rvert\right)\left\lvert \psi \right\rangle$$
$$=\left\langle \psi \right\rvert I\left\lvert \psi \right\rangle=\left\langle \psi|\psi \right\rangle$$

so if we evolve it over time then
$$(U\left\lvert \psi \right\rangle)^\dag U\left\lvert \psi \right\rangle=1\quad\forall\quad\left\lvert \psi \right\rangle$$
$$\Rightarrow\quad \left\langle \psi \right\rvert U^+U \left\lvert \psi \right\rangle=1$$
$$\Rightarrow\quad U^+U=I$$

This means that $U$ is [[unitary-operator|unitary]].

Note that

$$U(t_0,t)=U^{-1}(t,t_0)=U^\dag(t,t_0)$$
