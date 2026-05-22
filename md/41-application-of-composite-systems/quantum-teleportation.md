# Quantum Teleportation
This applies [[states-on-a-composite-system|entanglement]].
[[Let]] there be Alice and Bob who are separated. Alice has [[qubit]] A and B. Bob has qubit C. B and C are entangled.

Alice wants to send Bob qubit A in unknown [[ket-states|state]]
$$
\ket{\upsilon^{(A)}}=\alpha\ket{0}+\beta\ket{1}
$$
Teleportation occurs as we can copy the state of B to C. The state of B is destroyed, so it doesn't violate [[no-cloning-theorem]].

Alice and Bob pre-share the Bell state
$$
\ket{\Phi_+^{(BC)}} = \tfrac{1}{\sqrt{2}}\big(\ket{00} + \ket{11}\big)
$$
so now we combine this
$$
\ket{u^{(A)}} \ket{\Phi_+^{(BC)}} \quad \longrightarrow \quad \ket{\text{trash}^{(AB)}} \ket{u^{(C)}}
$$
Before observing it, Alice's qubit A holds the unknown state $\ket{u}$. $B, C$ are entangled but unrelated to you.
After observing it, Bob's qubit now holds state $\ket{u}$. Alice's qubit $A,B$ turn into trash. Trash is because the two qubits collapse into one of four random bell measurements.