# Einstein, Podolsky, and Rosen (1935)

In quantum mechanics -> if $z$ and $x$ [[observables]] are [[compatibility|incompatible]], getting a definite value for $z$ means losing the ability to know $x$.

Einstein-Podolsky-Rosen (1935) argued that quantum mehcanics is incomplete as physics should obey principles of [[local-realism]]

EPR postulated that let there be a pair of [[qubit|qubits]] in $\left\lvert \Psi_-^{(AB)} \right\rangle$. Alice takes one and Bob takes one. They then separate light years from each other.
Alice now measures her qubit in the z [[basis-states|basis]]. [[Let]]’s say she gets $0$.

$$
\left\lvert \Psi_-^{(AB)} \right\rangle=\frac{1}{\sqrt{2}}\left(\left\lvert {0}^{(A)} \right\rangle\otimes \left\lvert 1^{(B)} \right\rangle-\left\lvert 1^{(A)} \right\rangle\otimes \left\lvert {0}^{(B)} \right\rangle\right)
$$

Multiplying by $\left\langle {0}^{(A)} \right\rvert$ on the left, we get

$$
\left\langle {0}^{(A)} | \Psi_-^{(AB)} \right\rangle = \left(\left\langle 0 \right\rvert^{(A)} \otimes I^{(B)}\right) \left\lvert \Psi_-^{(AB)} \right\rangle
$$

$$
= \left(\left\langle 0 \right\rvert^{(A)} \otimes I^{(B)}\right) \cdot \tfrac{1}{\sqrt{2}}\left(\left\lvert {0}^{(A)} \right\rangle \otimes \left\lvert 1^{(B)} \right\rangle - \left\lvert 1^{(A)} \right\rangle \otimes \left\lvert {0}^{(B)} \right\rangle\right)
$$

$$
= \tfrac{1}{\sqrt{2}}\left[\left(\left\langle 0 \right\rvert^{(A)} \otimes I^{(B)}\right)\left(\left\lvert {0}^{(A)} \right\rangle \otimes \left\lvert 1^{(B)} \right\rangle\right) - \left(\left\langle 0 \right\rvert^{(A)} \otimes I^{(B)}\right)\left(\left\lvert 1^{(A)} \right\rangle \otimes \left\lvert {0}^{(B)} \right\rangle\right)\right]
$$

$$
=\frac{1}{\sqrt{2}}\left\lvert 1^{(B)} \right\rangle
$$

That means, via. Born’s rule, if Alice observed a $0$ outcome, Bob’s qubit is in the [[ket-states|state]] $\left\lvert 1 \right\rangle$ with 100% [[probability-theory|probability]].

EPR argues that it breaks local realism as local realism wants Bob’s qubit to have definite values of x and z observables.

Another example would be let there be two qualities of a particle: hardness $\{hard,soft\}$ and color $\{black, white\}$ if there is a particle with $(\hat{z}+, \hat{x}+)$ which just means it’s like $(soft, white)$. This is not an [[eigenstates|eigenstate]] because in quantum mechanics, knowing $\hat{z}=+$ means losing the ability to know $\hat{x}=-$ or $\hat{x}=+$.
We’re just constructing a model that obeys EPR.

Let's take a [[singlet]] 
We know that the EV of a singlet is -1:
$$
\mathbb{E}[\sigma_A^Z\sigma_B^Z]=-1\quad\mathbb{E}[\sigma_A^X\sigma_B^X]=-1
$$
so if 
$$
\sigma_A^Z=1\Rightarrow\sigma_B^Z=-1
$$
$$
\sigma_A^X=1\Rightarrow \sigma_B^X=-1
$$

[[local-realism|Local realism]] assumes that before every measurement, every observable has a pre-existing definite value determined by some hidden [[variables-addition|variable]] $\lambda$. So in any given run, $A_1,A_2,B_1,B_2$ all have predetermined definite values.

| λ | A | B (forced) |
|---|---|---|
| 0 | (Z₊, X₊) | (Z₋, X₋) |
| 1 | (Z₊, X₋) | (Z₋, X₊) |
| 2 | (Z₋, X₊) | (Z₊, X₋) |
| 3 | (Z₋, X₋) | (Z₊, X₊) |
Each particle of a singlet is maximally mixed so every $\lambda$ has a 25% change of occurring.

This complies with quantum mechanics but does this actually work for all measurements?

No! [[bells-theorem]] disproves EPR