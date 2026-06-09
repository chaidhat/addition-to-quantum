
When [[classical-computer|classical computers]] are just too boring.

Computers, theoretically, have two things: states (like the memory of the computer) and computations (moving from one state to another, like the CPU).
# State

As said before, a [[qubit]] in [[ket-state|state]] $\ket{\psi}$ is the quantum mechanics analog of a bit. It is often represented by [[spin-12-systems|spin-1/2]] particles. It's [[in]] the [[hilbert-space]] $H$.

$$
\ket{\psi}\in H
$$

Let there be $n$ [[qubit|qubits]]. It's a [[span]] of all [[basis-state|basis states]] 

$$
\ket{\psi} \in \mathcal{H} = \mathrm{span}\{\ket{0},\ket{1}\}^{\otimes n}
$$

The state is a [[superposition|superposition]] over all $2^n$ basis strings. $a_n$ are all [[probability-amplitude|probability amplitudes]]. See [[composite-system]] for how to deal with multiple qunatum systems.

$$
\ket{\psi} = \alpha_1\ket{0,0,\ldots,0} + \alpha_2\ket{1,0,\ldots,0} + \cdots + \alpha_{2^n}\ket{1,1,1,\ldots,1}
$$

# Computation

Computation is a [[unitary-operator|unitary operator]] $U$ applied to the input state

$$
\ket{\psi_\text{out}} = U\ket{\psi_\text{in}}
$$

In computers, we measure $z$ basis collapses the output and returns a bit [[string|string]] $z$ with [[probability-theory|probability]] given by the [[born-rule]]

$$
P(z) = \big|\braket{z | \psi_\text{out}}\big|^2, \qquad z \in \{0,1\}^n
$$

We use [[interference]] makes wrong answers destructively cancel and right ones add up.

We use [[states-on-a-composite-system|entanglement]] to create correlations that classical registers can't hold.

# Gates

What can unitary operator $U$ be?

One qubit gates
* [[quantum-gate-not]]
* [[quantum-gate-hadamard]]
* [[quantum-gate-rotate]]

Two qubit gates
* [[quantum-gate-controlled-u]]
* [[quantum-gate-controlled-z]]
* [[quantum-gate-cnot]]
* [[quantum-gate-swap]]