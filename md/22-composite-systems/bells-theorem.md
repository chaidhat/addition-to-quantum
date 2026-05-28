# Bell's Theorem

This disproves [[einstein-podolsky-rosen]]

Let Alice have two possible measurements $A_1$ or $A_2$. She picks one per experimental run. Bob has two possible measurements $B_1$ or $B_2$. He also picks one per run.

Each measurements returns $\pm 1$ 
$$
A_i,B_j\in\{\pm 1\}
$$
[[local-realism|Local realism]] assumes that before every measurement, every [[observable|observable]] has a pre-existing [[definite]] value determined by some hidden [[variable|variable]] $\lambda$. So in any given run, $A_1,A_2,B_1,B_2$ all have predetermined definite values.

Let $Q$ be a combination observable where
$$
Q=A_1(B_1-B_2)+A_2(B_1+B_2)
$$
Given that the measurement of $A_i,B_j$ returns $\pm 1$ we just defined before, then Q can only be either $\pm 2$.

Therefore, $Q$'s average on each run must statisfy
$$
-2\leq \mathbb{E}[Q]\leq +2
$$
expand $Q$ using linearity
$$
\mathbb{E}[Q] = \mathbb{E}[A_1 B_1] - \mathbb{E}[A_1 B_2] + \mathbb{E}[A_2 B_1] + \mathbb{E}[A_2 B_2]
$$
$$
\big|\mathbb{E}[A_1 B_1] - \mathbb{E}[A_1 B_2] + \mathbb{E}[A_2 B_1] + \mathbb{E}[A_2 B_2]\big| \leq 2
$$
This is CHSH inequality [[clauser-horne-shimony-holt]].


Consider a rotated observable
Let
$$
W^{(A)}_\theta = \sigma_A^X \sin\theta + \sigma_A^Z\cos\theta
$$
$$
W^{(B)}_{\theta'} = \sigma_B^X \sin{\theta'} + \sigma_B^Z\cos{\theta'}
$$
Combining gives
$$
\mathbb{E}[W^{(A)}_\theta W^{(B)}_{\theta'}] = \mathbb{E}[(\sigma^X_A\sin\theta + \sigma^Z_A\cos\theta)(\sigma^X_B\sin\theta' + \sigma^Z_B\cos\theta')]
$$
$$
= \sin\theta\sin\theta'\,\mathbb{E}[\sigma^X_A\sigma^X_B] + \cos\theta\cos\theta'\,\mathbb{E}[\sigma^Z_A\sigma^Z_B] + \sin\theta\cos\theta'\,\mathbb{E}[\sigma^X_A\sigma^Z_B] + \cos\theta\sin\theta'\,\mathbb{E}[\sigma^Z_A\sigma^X_B]
$$
See [[singlet]]
$$
= -\sin\theta\sin\theta' - \cos\theta\cos\theta'
$$
$$
= -\cos(\theta - \theta')
$$
Suppose Alice and Bob chose
$$
A_1 = W_0, \quad A_2 = W_{\pi/2}, \quad B_1 = W_{\pi/4}, \quad B_2 = W_{3\pi/4}
$$
Where $\theta=0$ is measuring on $\sigma^Z$ and $\theta=\pi/2$ is measuring on $\sigma^X$

$$
\mathbb{E}[A_1 B_1] = -\tfrac{1}{\sqrt{2}}, \quad \mathbb{E}[A_1 B_2] = +\tfrac{1}{\sqrt{2}}, \quad \mathbb{E}[A_2 B_1] = -\tfrac{1}{\sqrt{2}}, \quad \mathbb{E}[A_2 B_2] = -\tfrac{1}{\sqrt{2}}
$$
Substitute into [[clauser-horne-shimony-holt]] to get
$$
= \big|{-\tfrac{1}{\sqrt{2}}} - \tfrac{1}{\sqrt{2}} - \tfrac{1}{\sqrt{2}} - \tfrac{1}{\sqrt{2}}\big| = 2\sqrt{2}
$$
However, this contradicts as
$$
2\sqrt{2} \not\leq 2
$$
The shows that the two are mathematically [[compatibility|incompatible]]. Bell's theorem in concrete form.

$2\sqrt{2}$ is known a Tsirelson's bound. The maximum [[clauser-horne-shimony-holt]] value a [[ket-state|state]] can get.

See how it is exploited with [[greenberger-horne-zeilinger]]
