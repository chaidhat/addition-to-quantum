# Observables on a Composite System

Don’t forget that operators can sometimes be [<span class="underline">observables</span>](#observables).

Let $F\in L(H_A), G \in L (H_B)$ be operators.

Then $F\otimes G \in L(H_A\otimes H_B)$ is defined as
$$(F\otimes G)\left\lvert v, w \right\rangle \triangleq F\left\lvert v \right\rangle\otimes G\left\lvert w \right\rangle$$

Upgrading/promoting subsystem operators gets us

$$F\in L(H_A)\rightarrow F\otimes I \in L(H_A\otimes H_B)$$
$$G\in L(H_B)\rightarrow G\otimes I \in L(H_A\otimes H_B)$$

Where $L$ is the set of all linear operators on a Hilbert space.
This means that any operator acting on a subsystem $H_A$ can be upgraded to an operator that makes it act on a larger dimension $H_A\otimes H_B$.

This is because
$$(F\otimes I)(I \otimes G)\left\lvert v, w \right\rangle =(F\otimes I)(\left\lvert v \right\rangle\otimes G\left\lvert w \right\rangle) = F\left\lvert v \right\rangle\otimes G\left\lvert w \right\rangle$$
Conversely,
$$(I\otimes G)(F\otimes I)(\left\lvert v \right\rangle\otimes \left\lvert w \right\rangle)=F\left\lvert v \right\rangle\otimes G\left\lvert w \right\rangle$$
Notation wise, let
$$F^{(A)}\triangleq F\otimes I$$
$$G^{(B)}\triangleq I\otimes G$$
This is form is overloaded, so don’t get confused with notation of [<span class="underline">states</span>](#states-on-a-composite-system) which also can have an superscript $(A)$.

Note
$$\boxed{[F^{(A)}, G^{(B)}]= [F\otimes I, I\otimes G]=0}$$

For a composite system $H = H_A \otimes H_B$, an operators acting only on one subsystem extends to the full space by tensoring with the identity on the other.

                          Subsystem $A$                   Subsystem $B$
  -------------- ------------------------------- -------------------------------
  Operator           $Q^{(A)} = Q \otimes I$         $R^{(B)} = I \otimes R$
  Eigenvalues                 $q_a$                           $r_b$
  Eigenvectors    $\left\lvert a \right\rangle$   $\left\lvert b \right\rangle$
  Index range        $a = 1, 2, \dots, d_A$          $b = 1, 2, \dots, d_B$

Sum
$$Q^{(A)} + R^{(B)} = Q \otimes I + I \otimes R$$

- Eigenvectors: $\left\lvert a \right\rangle \otimes \left\lvert b \right\rangle$

- Eigenvalues: $q_a + r_b$

Product
$$Q^{(A)} R^{(B)} = Q \otimes R$$

- Eigenvectors: $\left\lvert a \right\rangle \otimes \left\lvert b \right\rangle$

- Eigenvalues: $q_a\, r_b$
