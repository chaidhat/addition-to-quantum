# Measuring a Composite System

For a non-composite system, recall that the set of measurements you can make is the eigenvalues of the [<span class="underline">observable</span>](#observables).

Recall [<span class="underline">measuring a quantum state</span>](#measuring-a-quantum-state).

Entanglement doesn’t always require a interacting Hamiltonian. They can also be created by jointly measuring a product state.

Suppose we start with $\left\lvert \psi \right\rangle = \left\lvert 0 \right\rangle \otimes \left\lvert 0 \right\rangle$ but measured in the $x$ axis
$$\begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \longrightarrow \text{product state}$$
Measure $\hat{S}_x^{(\text{tot})}$, get 0 with $\frac{1}{2}$ probability. Mathematically, we use a [<span class="underline">projector</span>](#projectors) to measure the state. Via the projection rule we get
$$\frac{1}{\sqrt{1/2}} \Pi_{S_x} = 0 \quad \left\lvert \psi \right\rangle = \frac{1}{\sqrt{2}}\left(\left\lvert +,- \right\rangle + \left\lvert -,+ \right\rangle\right)$$
$$\frac{1}{\sqrt{2}}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \longrightarrow \text{entangled state!}$$
This means that joint measurement can product entanglement.
Equivalent to interacting via third party.

Consider a composite system $H_{\text{Alice}} \otimes H_{\text{Bob}}$ with subsystem observables having eigenvalues $q_a$, $r_b$ and eigenvectors $\left\lvert a \right\rangle$, $\left\lvert b \right\rangle$.

Joint probability for outcome $(q_a, r_b)$:
$$P(a, b) = \bigl|\left\langle a, b | \Psi^{(AB)} \right\rangle\bigr|^2$$

Marginal probabilities:
$$P(a) = \sum_b p(a, b), \qquad P(b) = \sum_a p(a, b)$$

No-signalling from $A$ to $B$. Expand the joint state in the product basis:
$$\left\lvert \Psi^{(AB)} \right\rangle = \sum_{a,b} c_{ab} \left\lvert a \right\rangle \otimes \left\lvert b \right\rangle, \qquad p(a, b) = |c_{ab}|^2$$
Group the sum by $b$ to isolate Bob’s basis:
$$\left\lvert \Psi^{(AB)} \right\rangle = \sum_b \underbrace{\Bigl(\sum_a c_{ab} \left\lvert a \right\rangle\Bigr)}_{\left\lvert \phi_b \right\rangle \ \text{(unnormalized!)}} \otimes \left\lvert b \right\rangle
    = \sum_b \left\lvert \phi_b \right\rangle \otimes \left\lvert b \right\rangle$$
With this notation, $P(a, b) = |\left\langle a | \phi_b \right\rangle|^2$, so Bob’s marginal is
$$P(b) = \sum_a P(a, b) = \sum_a \left\langle \phi_b | a \right\rangle \left\langle a | \phi_b \right\rangle = \left\langle \phi_b | \phi_b \right\rangle$$
The middle step used $\sum_a \left\lvert a \right\rangle\left\langle a \right\rvert = I$ — which holds for *any* orthonormal basis $\{\left\lvert a \right\rangle\}$ on Alice’s side. Therefore $p(b)$ is independent of the choice of Alice’s measurement basis. Alice cannot influence Bob’s marginal statistics by switching what she measures.

Suppose we apply $U^{(A)}$ to Alice’s subsystem
$$\left\lvert \Psi^{(AB)} \right\rangle = U^{(A)} \otimes I \left\lvert \Psi^{(AB)} \right\rangle=\sum_b U\left\lvert \phi_b \right\rangle \otimes \left\lvert b \right\rangle$$

This means that the marginal probability distributiuon of Bob’s outcome becomes
$$P'(b)=\left\langle \phi_b \right\rvert U^+U \left\lvert \phi_b \right\rangle=\left\langle \phi_b|\phi_b \right\rangle=P(b)$$

This means Bob’s probabilities are unaffected.
