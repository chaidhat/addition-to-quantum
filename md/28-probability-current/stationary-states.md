
Stationary states are eigenstates of the Hamiltonian. This means that they are states with definite energy.

$$
\hat{H}\ket{\phi_n} = E_n \ket{\phi_n}
$$

Stationary states are in only a global phase. This means that all physical quantities stay constant in time. Note from [[unitary-evolution|unitary evolution]]-- a single eigenstate evolves as 

$$
\ket{\phi_n(t)} = e^{-iE_n t/\hbar}\ket{\phi_n}
$$

This matters because 
$$
\ket{\psi(0)} = \sum_n c_n \ket{\phi_n}
$$
Note that $c_n$ is a [[probability-amplitude]] and $\phi_n$ is a [[basis-state]] and $\ket{\psi(0)}$ is a [[ket-state|state]]. Note 

each component has its own phase so 
$$
\ket{\psi(t)} = \sum_n c_n\, e^{-iE_n t/\hbar}\ket{\phi_n}
$$

$$
\braket{x|\psi(t)} = \sum_n c_n\, e^{-iE_n t/\hbar}\braket{x|\phi_n}
$$

$$
\psi(x,t) = \sum_n c_n\, e^{-iE_n t/\hbar}\phi_n(x)
$$

A superposition therefore is not stationary. The differing phases produces interference which is where time-dependence (EVs that oscillate) come from.

Note that
In a single starionary state, EV are constant

$$
\mathbb{E}[\hat A] = \braket{\phi_n|e^{+iE_nt/\hbar}\,\hat A\,e^{-iE_nt/\hbar}|\phi_n} = \braket{\phi_n|\hat A|\phi_n}
$$

But in super position, EV can oscillate.

$$
\mathbb{E}[\hat A](t) = \Big(\sum_n c_n^* e^{+iE_n t/\hbar}\bra{\phi_n}\Big)\hat A\Big(\sum_m c_m e^{-iE_m t/\hbar}\ket{\phi_m}\Big)
$$

$$
= \sum_{n,m} c_n^* c_m\, e^{-i(E_m-E_n)t/\hbar}\braket{\phi_n|\hat A|\phi_m}
$$

