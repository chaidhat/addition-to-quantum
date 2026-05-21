# Entanglement and Quantum Nonlocality

In quantum mechanics -\> if $z$ and $x$ observables are incompaible, getting a definite value for $z$ means losing the ability to know $x$.

Einstein-Podolsky-Rosen (1935) argued that quantum mehcanics is incomplete as physics should obey principles of local realism whereby

1.  locality: measurement results cannot dpeend on what happens far away

2.  realism: if something is predictable without disturbance, it must have already been there

EPR postulated that let there be a pair of qubits in $\left\lvert \Psi_-^{(AB)} \right\rangle$. Alice takes one and Bob takes one. They then separate light years from each other.
Alice now measures her qubit in the z basis. Let’s say she gets $0$.
$$\left\lvert \Psi_-^{(AB)} \right\rangle=\frac{1}{\sqrt{2}}\left(\left\lvert {0}^{(A)} \right\rangle\otimes \left\lvert 1^{(B)} \right\rangle-\left\lvert 1^{(A)} \right\rangle\otimes \left\lvert {0}^{(B)} \right\rangle\right)$$
Multiplying by $\left\langle {0}^{(A)} \right\rvert$ on the left, we get
$$\left\langle {0}^{(A)} | \Psi_-^{(AB)} \right\rangle = \left(\left\langle 0 \right\rvert^{(A)} \otimes I^{(B)}\right) \left\lvert \Psi_-^{(AB)} \right\rangle$$
$$= \left(\left\langle 0 \right\rvert^{(A)} \otimes I^{(B)}\right) \cdot \tfrac{1}{\sqrt{2}}\left(\left\lvert {0}^{(A)} \right\rangle \otimes \left\lvert 1^{(B)} \right\rangle - \left\lvert 1^{(A)} \right\rangle \otimes \left\lvert {0}^{(B)} \right\rangle\right)$$
$$= \tfrac{1}{\sqrt{2}}\left[\left(\left\langle 0 \right\rvert^{(A)} \otimes I^{(B)}\right)\left(\left\lvert {0}^{(A)} \right\rangle \otimes \left\lvert 1^{(B)} \right\rangle\right) - \left(\left\langle 0 \right\rvert^{(A)} \otimes I^{(B)}\right)\left(\left\lvert 1^{(A)} \right\rangle \otimes \left\lvert {0}^{(B)} \right\rangle\right)\right]$$
$$=\frac{1}{\sqrt{2}}\left\lvert 1^{(B)} \right\rangle$$
That means, via. Born’s rule, if Alice observed a $0$ outcome, Bob’s qubit is in the state $\left\lvert 1 \right\rangle$ with 100% probability.

EPR argues that it breaks local realism as local realism wants Bob’s qubit to have definite values of x and z observables.

Another example would be let there be two qualities of a particle: hardness $\{hard,soft\}$ and color $\{black, white\}$ if there is a particle with $(\hat{z}+, \hat{x}+)$ which just means it’s like $(soft, white)$. This is not an eigenstate because in quantum mechanics, knowing $\hat{z}=+$ means losing the ability to know $\hat{x}=-$ or $\hat{x}=+$.
We’re just constructing a model that obeys EPR.
