# Tensor Product

Let
$$\left\lvert v, w \right\rangle \triangleq \left\lvert v \right\rangle\otimes\left\lvert w \right\rangle$$

Given [<span class="underline">vector spaces</span>](#vector-spaces) $H_A$ and $H_B$, the tensor product $H_A\otimes H_B$ is a new vector space

Properties

1.  $|v\rangle \in {H}_A, \ |w\rangle \in {H}_B \implies |v\rangle \otimes |w\rangle \in {H}_{AB}$

2.  Distributive law:
    $$\begin{align*}
                  |v\rangle \otimes (c_0 |w_0\rangle + c_1 |w_1\rangle) & = c_0 (|v\rangle \otimes |w_0\rangle) + c_1 (|v\rangle \otimes |w_1\rangle) \\
                  (c_0 |v_0\rangle + c_1 |v_1\rangle) \otimes |w\rangle & = c_0 (|v_0\rangle \otimes |w\rangle) + c_1 (|v_1\rangle \otimes |w\rangle)
    \end{align*}$$

3.  Inner product
    $$\begin{align*}
                  \langle v_1, w_1 \mid v_2, w_2 \rangle & = (\langle v_1 | \otimes \langle w_1 |)(|v_2\rangle \otimes |w_2\rangle) \\
                                                         & = \langle v_1 | v_2 \rangle \langle w_1 | w_2 \rangle
    \end{align*}$$

4.  $\forall \, |\psi\rangle \in \mathcal{H}_{AB}, \ |\psi\rangle = \sum_{\mu} c_\mu |v_\mu\rangle \otimes |w_\mu\rangle$\
    for some sequence of $(c_\mu, |v_\mu\rangle, |w_\mu\rangle)$

Note

1.  $\left\lvert v \right\rangle\otimes\left\lvert w \right\rangle\neq\left\lvert w \right\rangle\otimes\left\lvert v \right\rangle$

2.  $a\left\lvert w \right\rangle\otimes\left\lvert v \right\rangle=\left\lvert w \right\rangle\otimes a\left\lvert v \right\rangle=a(\left\lvert w \right\rangle\otimes\left\lvert v \right\rangle)$

3.  $0\otimes\left\lvert v \right\rangle=\left\lvert w \right\rangle\otimes 0 = 0$

4.  $\left\langle v_i, w_{j} | v_k, w_l \right\rangle=\left\langle v_i | v_k \right\rangle\left\langle w_j | w_l \right\rangle=\delta_{ik}\delta_{jl}$

The dimensions are multiplied
$$dim(H_A\otimes H_B)=dim(H_A)\times dim(H_B)$$
$$\dim(\underbrace{\mathbb{C}^2 \otimes \mathbb{C}^2 \otimes \cdots \otimes \mathbb{C}^2}_{n}) = 2^n \quad \text{(dim of } n\text{-qubit Hilbert space)}$$

$$\{\left\lvert v_i \right\rangle\otimes\left\lvert w_j \right\rangle; 1\leq i \leq dim(H_A), 1\leq j \leq dim(H_B)\}$$
is an orthonormal basis for $H_A\otimes H_B$.
