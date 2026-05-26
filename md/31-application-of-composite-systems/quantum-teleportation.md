# Quantum Teleportation
This applies [[states-on-a-composite-system|entanglement]].
Let there be Alice and Bob who are separated. Alice has [[qubit]] A and B. Bob has qubit C. B and C are entangled.

Alice wants to send Bob qubit A in unknown [[ket-state|state]]
$$
\ket{\upsilon^{(A)}} = \alpha\ket{0^{(A)}}+\beta\ket{1^{(A)}}
$$
Teleportation occurs as we can copy the state of B to C. The state of B is destroyed, so it doesn't violate [[no-cloning-theorem]].

Alice and Bob pre-share the [[bell-states|Bell state]]
$$
\ket{\Phi_+^{(BC)}} = \tfrac{1}{\sqrt{2}}\big(\ket{00} + \ket{11}\big)
$$
so now we combine this
$$
\ket{u^{(A)}} \ket{\Phi_+^{(BC)}} \quad \longrightarrow \quad \ket{\text{trash}^{(AB)}} \ket{u^{(C)}}
$$
Before observing it, Alice's qubit A holds the unknown state $\ket{u}$. $B, C$ are entangled but unrelated to you.
After observing it, Bob's qubit now holds state $\ket{u}$. Alice's qubit $A,B$ turn into trash. Trash is because the two qubits collapse into one of four random bell measurements.

Example
We know
$$
\ket{\upsilon^{(A)}} = \alpha\ket{0^{(A)}}+\beta\ket{1^{(A)}}
$$
So
$$
\ket{u^{(A)}} \ket{\Phi_+^{(BC)}} = \big(\alpha\ket{0^{(A)}} + \beta\ket{1^{(A)}}\big) \otimes \tfrac{1}{\sqrt{2}}\big(\ket{0^{(B)} 0^{(C)}} + \ket{1^{(B)} 1^{(C)}}\big)
$$
$$
=\frac{\alpha}{\sqrt{2}}(\ket{000}+\ket{011})+\frac{\beta}{\sqrt{2}}(\ket{100}+\ket{111})
$$
Gives
$$
= \tfrac{1}{2}\big(\ket{\Phi_+^{(AB)}} + \ket{\Phi_-^{(AB)}}\big) \otimes \alpha\ket{0^{(C)}}
$$
$$
+ \tfrac{1}{2}\big(\ket{\Psi_+^{(AB)}} + \ket{\Psi_-^{(AB)}}\big) \otimes \alpha\ket{1^{(C)}}
  $$
$$
+ \tfrac{1}{2}\big(\ket{\Psi_+^{(AB)}} - \ket{\Psi_-^{(AB)}}\big) \otimes \beta\ket{0^{(C)}}
$$
$$
+\tfrac{1}{2}\big(\ket{\Phi_+^{(AB)}} - \ket{\Phi_-^{(AB)}}\big) \otimes \beta\ket{1^{(C)}}
$$

Gives
$$
= \tfrac{1}{2}\ket{\Phi_+^{(AB)}}\big(\alpha\ket{0^{(C)}} + \beta\ket{1^{(C)}}\big) \quad \longrightarrow\ \ket{u^{(C)}}
$$
$$
+ \tfrac{1}{2}\ket{\Phi_-^{(AB)}}\big(\alpha\ket{0^{(C)}} - \beta\ket{1^{(C)}}\big) \quad \longrightarrow\ \sigma^{Z(C)}\ket{u^{(C)}}
$$
$$
+ \tfrac{1}{2}\ket{\Psi_+^{(AB)}}\big(\alpha\ket{1^{(C)}} + \beta\ket{0^{(C)}}\big) \quad \longrightarrow\ \sigma^{X(C)}\ket{u^{(C)}}
$$
$$
+ \tfrac{1}{2}\ket{\Psi_-^{(AB)}}\big(\alpha\ket{1^{(C)}} - \beta\ket{0^{(C)}}\big) \quad \longrightarrow\ i\sigma^{Y(C)}\ket{u^{(C)}}
$$
Alice measures in Bell [[basis-state|basis]] and gets four possible outcomes
$$
1\Rightarrow\Phi_+\quad 2\Rightarrow \Phi_- \quad 3\Rightarrow \Psi_+\quad 4\Rightarrow \Psi_-
$$
Example:
If Alice got outcome three (i.e., $\Psi_+$) then
$$
\ket{\phi_3^{(C)}}=\frac{1}{\sqrt{P_3}}\braket{\Psi_+^{(AB)}|\upsilon^{(A)}\Phi_+^{(BC)}}=\alpha\ket{1^{(C)}}+\beta\ket{0^{(C)}}
$$
Alice tells Bob she got 3
Bob's [[operator|operation]] conditional on Alice's outcome
$$
1=I\quad 2=\sigma^Z\quad 3=\sigma^X\quad 4=\sigma^Y
$$
Bob choose $\sigma^X$ as the base so
$$
\sigma^X\ket{\phi_3^{(C)}}=\alpha\ket{0^{(C)}}+\beta\ket{1^{(C)}}=\ket{\upsilon^{(C)}}
$$
Bob now has reproduced $\ket{\upsilon}$



