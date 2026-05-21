# No Communication Theorem

With access to state $$\left\lvert \Psi^{(AB)} \right\rangle$$ which may or may not be entangled, Alice cannot convey information to Bob by

1.  Choosing a basic measurement on $A$

2.  Choosing a unitary evolution operator for $A$

But Alice’s choice of measurement basis cannot affect Bob’s measurement statistics, her measurement outcome CAN affect Bob’s state.

Let $\left\lvert \psi_a \right\rangle$ be the state of Bob’s qubit conditioned on Alice’s outcome $a$.

$$\left\lvert \psi_a \right\rangle \triangleq \left\langle a^{(A)}|\Psi^{(AB)} \right\rangle$$
Let $a$ be the outcome of Alice’s measurement. If measured in the z axis, it’d be $a\in\{0,1\}$ and if measured in the x axis, it’d be $a\in\{+,-\}$.

We can decompose the earlier state into
$$\left\lvert \Psi^{(AB)} \right\rangle=\sum_a\left\lvert a \right\rangle\otimes \left\lvert \psi_a \right\rangle$$
What does this mean? This means the basis $\left\lvert a \right\rangle$ cross tensor product with the state itself. This promotes
Via Born’s rule
$$P(a,b)=|\left\langle b|\psi_a \right\rangle|^2$$
Via [<span class="underline">conditional probability</span>](#conditional-probability)
$$P(b|a)=\frac{1}{P(a)}|\left\langle b|\psi_a \right\rangle|^2=\frac{\left\langle \psi_a|b \right\rangle\left\langle b|\psi_a \right\rangle}{\left\langle \psi_a|\psi_a \right\rangle}$$
$$=|\left\langle b|\hat{\psi}_a \right\rangle|^2$$
Recall [<span class="underline">magnitude</span>](#magnitude)
$$\left\lvert \hat{\psi}_a \right\rangle\triangleq\frac{1}{\sqrt{P(a)}}\left\lvert \psi_a \right\rangle=\frac{\left\lvert \psi_a \right\rangle}{||\left\lvert \psi_a \right\rangle||}=\frac{\left\lvert \psi_a \right\rangle}{\sqrt{\left\langle \psi_a|\psi_a \right\rangle}}$$

Note that generally, conditional state can be obtained via a partial inner product.
$$\boxed{\left\langle a^{(A)}|\Psi^{(AB)} \right\rangle\triangleq(\left\langle a \right\rvert\otimes I)\left\lvert \Psi^{(AB)} \right\rangle}$$
Note this yields a vector in $H_B$.
Where $\left\lvert \Psi^{(AB)} \right\rangle$ is in $H_A \otimes H_B$

Example:
$$\left\lvert \Psi^{(AB)}_- \right\rangle=\frac{1}{\sqrt{2}}\left(\left\lvert {0}^{(A)} \right\rangle\otimes \left\lvert 1^{(B)} \right\rangle-\left\lvert 1^{(A)} \right\rangle\otimes \left\lvert {0}^{(B)} \right\rangle\right)$$
Suppose Alice measures in z basis

$$\left\lvert \Psi^{(AB)}_- \right\rangle=\frac{1}{\sqrt{2}}\left(\left\lvert {0}^{(A)} \right\rangle\otimes \left\lvert 1^{(B)} \right\rangle-\left\lvert 1^{(A)} \right\rangle\otimes \left\lvert {0}^{(B)} \right\rangle\right)$$
$$\begin{array}{c|c}
        \text{Outcome} & \text{conditional state (unnormalized)}                                                                                  \\
        \hline
        a = 0          & \left\lvert \psi_0^{(B)} \right\rangle = \left\langle {0}^{(A)} | \Phi_-^{(AB)} \right\rangle = \frac{1}{\sqrt{2}} \left\lvert 1^{(B)} \right\rangle \qquad p(a=0) = \tfrac{1}{2}  \\[1em]
        a = 1          & \left\lvert \psi_1^{(B)} \right\rangle = \left\langle 1^{(A)} | \Phi_-^{(AB)} \right\rangle = -\frac{1}{\sqrt{2}} \left\lvert {0}^{(B)} \right\rangle \qquad p(a=1) = \tfrac{1}{2}
    \end{array}$$

We can see that Bob’s qubit is projected onto z eigenstate opposite to Alice’s outcome.

Let’s say that Alice measures in x basis.

$$\begin{array}{c|l}
        \text{Outcome} & \text{Conditional state (unnormalized)}                                                                                                                            \\
        \hline
        a = +          & \begin{aligned}
                             \left\lvert \psi_+^{(B)} \right\rangle & = \left\langle +^{(A)} | \Phi_-^{(AB)} \right\rangle                                                                                                           \\
                                                & = \frac{\left\langle {0}^{(A)} \right\rvert + \left\langle 1^{(A)} \right\rvert}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}} \left( \left\lvert {0}^{(A)} 1^{(B)} \right\rangle - \left\lvert 1^{(A)} {0}^{(B)} \right\rangle \right) \\
                                                & = \frac{\left\lvert 1^{(B)} \right\rangle}{2} - \frac{\left\lvert {0}^{(B)} \right\rangle}{2} = -\frac{\left\lvert -^{(B)} \right\rangle}{\sqrt{2}}
                         \end{aligned} \\
                       & \qquad p(a=+) = \tfrac{1}{2}                                                                                                                                       \\[1em]
        a = -          & \left\lvert \psi_-^{(B)} \right\rangle = \left\langle -^{(A)} | \Phi_-^{(AB)} \right\rangle = \frac{\left\lvert +^{(B)} \right\rangle}{\sqrt{2}}                                                                             \\
                       & \qquad p(a=-) = \tfrac{1}{2}
    \end{array}$$

Bob’s qubit is projected to opposite basis state as ALice’s measurement
Somehow, Alice’s choice of measurement basis affects Bob’s state.
If Alice measures in z basis, Bob’s conditional state is $\left\lvert 0 \right\rangle$ or $\left\lvert 1 \right\rangle$ with 50/50 probability. If Alice measures in x basis, Bob’s conditional state is $\left\lvert + \right\rangle$ or $\left\lvert - \right\rangle$ with 50/50 probability.
$$\hat{\rho}_B = \tfrac{1}{2} \left\lvert 0 \right\rangle\left\langle 0 \right\rvert + \tfrac{1}{2} \left\lvert 1 \right\rangle\left\langle 1 \right\rvert = \tfrac{1}{2} \left\lvert + \right\rangle\left\langle + \right\rvert + \tfrac{1}{2} \left\lvert - \right\rangle\left\langle - \right\rvert = \frac{1}{2}I$$
