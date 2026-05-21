# Schrödinger Equation, Hamiltonian II

Let’s derive the Schrödinger equation from the postulates of an [[isolated-system]].

Let $t_0$ be the initial time and $t$ be the time after some time has passed.

Let
$$|\psi(t)\rangle = U(t, t_0) |\psi(t_0)\rangle$$
So

$$\frac{\partial}{\partial t} |\psi(t)\rangle = \frac{\partial U(t, t_0)}{\partial t} |\psi(t_0)\rangle$$
Due to its inverse property where $U(t_0,t)U(t,t_0)=I$,

$$= \frac{\partial U(t, t_0)}{\partial t} \, U(t_0, t) |\psi(t)\rangle$$

$$= \underbrace{\frac{\partial U(t, t_0)}{\partial t} \, U^\dagger(t, t_0)}_{\Lambda(t, t_0)} |\psi(t)\rangle$$

Properties

1.  $\Lambda(t, t_0)$ is [[anti-hermitian-operators|anti-Hermitian]].

    Note:
    $$\Lambda^\dagger(t, t_0) = U(t, t_0) \, \frac{\partial U^\dagger(t, t_0)}{\partial t}$$

    Differentiate $U(t, t_0) U^\dagger(t, t_0) = I$:
    $$\frac{\partial}{\partial t}\!\left[U(t, t_0) U^\dagger(t, t_0)\right] = \frac{\partial U(t, t_0)}{\partial t} U^\dagger(t, t_0) + U(t, t_0) \frac{\partial U^\dagger(t, t_0)}{\partial t} = 0$$

    $$\Rightarrow \;\; \Lambda(t, t_0) + \Lambda^\dagger(t, t_0) = 0$$

    $$\Rightarrow \;\; \Lambda = -\Lambda^\dagger \;\;\text{is anti-Hermitian.}$$

2.  $\Lambda(t, t_0)$ is independent of $t_0$
    $$\Lambda (t,t_0)=\frac{\partial U(t, t_0)}{\partial t} U^\dagger(t, t_0)$$
    $$=\frac{\partial U(t, t_0)}{\partial t} U(t_0,t_1)U^\dag(t_0,t_1)
                  U^\dagger(t, t_0)$$
    $$=\frac{\partial}{\partial t}[U(t,t_0)U(t_0,t_1)][U(t,t_0)U(t_0, t_1)]^\dag$$
    $$=\frac{\partial U(t,t_1)}{\partial t}U^\dag(t,t_1)=\Lambda (t,t_1)$$
    For any $t_0,t_1$

Let

$$\Lambda (t)\triangleq \Lambda (t,t_0)$$
$$\Rightarrow\frac{d}{dt}\left\lvert \psi(t) \right\rangle = \frac{\partial}{\partial t}U(t, t_0)U^\dag(t,t_0) |\psi(t)\rangle$$
$$=\Lambda (t)\left\lvert \psi(t) \right\rangle$$

Then, let
$$\boxed{H(t)\triangleq i\hbar \Lambda (t) = i\hbar \frac{\partial U(t, t_0)}{\partial t} U^\dagger(t, t_0)}$$

This is known as the Hamiltonian, which has the units of energy. In natural units where $\hbar=1$, it is simply inverse time $s^{-1}$.

We arrive at the Schrödinger equation:
$$\boxed{i\hbar \frac{d}{dt}\left\lvert \psi(t) \right\rangle=H(t)\left\lvert \psi(t) \right\rangle}$$
Remarks

1.  Derived Schrödinger equation from only the assumption of unitary time evolution. The Hamiltonian operator is derived from $U(t,t_0)$

2.  Converse is true where we can construct $U(t,t_0)$ from knowledge of $H(t)$

3.  in many physical systems, it easier to find $H(t)$ than finding $U(t,t_0)$
