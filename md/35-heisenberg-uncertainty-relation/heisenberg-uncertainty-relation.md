# Heisenberg Uncertainty Relation

$$\Delta A\Delta B\geq \frac{1}{2}\left|\mathbb{E}\left[[\hat{A},\hat{B}]\right]\right|$$
$$\Delta A^2 \Delta B^2 \geq \left|\left\langle \psi \right\rvert\frac{1}{2j}[\hat{A},\hat{B}]\left\lvert \psi \right\rangle\right|^2 = \left(\frac{1}{2j}\mathbb{E}\left[[\hat{A},\hat{B}]\right]\right)^2$$
Proof
Consider any scalar $\lambda\in \mathbb{C}$ and any [<span class="underline">vectors</span>](#vectors) $\left\lvert u \right\rangle,\left\lvert v \right\rangle\in \mathbb{C}^n$ and we have two states $\left\lvert f \right\rangle$ and $\left\lvert g \right\rangle$.

We subtract it like so $\left\lvert f \right\rangle-\lambda\left\lvert g \right\rangle$ is also a vector

Note that for QM systems, $\left\langle u|u \right\rangle=1$. This is because of [<span class="underline">Born’s rule</span>](#borns-rule) where the number it represents is the total probability, which needs to sum to 1.
$$\left\langle f-\lambda g|f-\lambda g \right\rangle\geq 0$$
$$\Rightarrow\left\langle f|f \right\rangle-\lambda \left\langle f|g \right\rangle - \lambda^*\left\langle g|f \right\rangle+(|\lambda|)^2\left\langle g|g \right\rangle\geq 0$$

We want to choose the $\lambda$ that minimizes the expression.

$$\lambda=\frac{\left\langle g|f \right\rangle}{\left\langle g|g \right\rangle}\quad \Rightarrow\quad \lambda^*=\frac{\left\langle f|g \right\rangle}{\left\langle g|g \right\rangle},\quad |\lambda|^2=\frac{\left\langle f|g \right\rangle\left\langle g|f \right\rangle}{\left\langle g|g \right\rangle^2}$$

Which makes $\left\lvert f \right\rangle-\lambda\left\lvert g \right\rangle$ orthogonal to $\left\lvert g \right\rangle$.
$$\Rightarrow\left\langle f|f \right\rangle-\frac{\left\langle g|f \right\rangle}{\left\langle g|g \right\rangle} \left\langle f|g \right\rangle -\frac{\left\langle f|g \right\rangle}{\left\langle g|g \right\rangle}\left\langle g|f \right\rangle +\frac{\left\langle f|g \right\rangle\left\langle g|f \right\rangle}{\left\langle g|g \right\rangle^2}\left\langle g|g \right\rangle\geq 0$$

Note that $\left\langle g|f \right\rangle\left\langle f|g \right\rangle=|\left\langle f|g \right\rangle|^2$

$$\Rightarrow\left\langle f|f \right\rangle-\frac{|\left\langle f|g \right\rangle|^2}{\left\langle g|g \right\rangle}-\frac{|\left\langle f|g \right\rangle|^2}{\left\langle g|g \right\rangle}+\frac{|\left\langle f|g \right\rangle|^2}{\left\langle g|g \right\rangle}\geq 0$$
$$\Rightarrow\left\langle f|f \right\rangle-\frac{|\left\langle f|g \right\rangle|^2}{\left\langle g|g \right\rangle}\geq 0$$
Assuming $\left\langle g|g \right\rangle\geq 0$
$$\Rightarrow\left\langle f|f \right\rangle\left\langle g|g \right\rangle\geq |\left\langle f|g \right\rangle|^2$$
This is [<span class="underline">Cauchy-Schwarz</span>](#cauchy-schwarz-inequality) squared

Consider the [<span class="underline">observables</span>](#observables) that we defined above. This can be written as
$$\left\lvert f \right\rangle=(\hat{A}-\mathbb{E}[A]I)\left\lvert \psi \right\rangle\quad
    \left\lvert g \right\rangle=(\hat{B}-\mathbb{E}[B]I)\left\lvert \psi \right\rangle$$
Note that $\Delta A$ is the [<span class="underline">standard deviation</span>](#standard-deviation) of $\hat{A}$.
$$\left\langle f|f \right\rangle=\left\langle \psi \right\rvert(\hat{A}-\mathbb{E}[A]I)\left\lvert \psi \right\rangle$$
$$= \left\langle \psi \right\rvert\left(\hat{A}^2-2\mathbb{E}[A]\hat{A}+\mathbb{E}[A]^2I\right)\left\lvert \psi \right\rangle$$
$$= \left\langle \psi \right\rvert\hat{A}^2\left\lvert \psi \right\rangle-2\mathbb{E}[A]\left\langle \psi \right\rvert\hat{A}\left\lvert \psi \right\rangle+\mathbb{E}[A]^2\left\langle \psi \right\rvert I\left\lvert \psi \right\rangle$$
$$=\mathbb{E}[\hat{A}^2]-2\mathbb{E}[A]^2+\mathbb{E}[A]^2$$
$$=\mathbb{E}[\hat{A}^2]-\mathbb{E}[A]^2$$
$$=\Delta A^2$$
By symmetry
$$\left\langle g|g \right\rangle=\Delta B^2$$
Plug into our equation above
$$\Delta A^2\Delta B^2\geq |\left\langle f|g \right\rangle|^2$$
$$\Rightarrow\Delta A^2\Delta B^2\geq (Im\left\langle f|g \right\rangle)^2$$
$$\Rightarrow\Delta A^2\Delta B^2\geq (Im(\left\langle \psi \right\rvert(\hat{A}-\mathbb{E}[A]I)(\hat{B}-\mathbb{E}[B]I)\left\lvert \psi \right\rangle))^2$$
$$\Rightarrow\Delta A^2\Delta B^2\geq (Im(\mathbb{E}[AB]-2\mathbb{E}[A]\mathbb{E}[B]-+ \mathbb{E}[A]\mathbb{E}[B]))^2$$
$$\Rightarrow\Delta A^2\Delta B^2\geq (Im(\mathbb{E}[AB]-\mathbb{E}[A]\mathbb{E}[B]))^2$$
Note that $Im z=\frac{1}{2i}(z-z^*)$
$$\Rightarrow\Delta A^2\Delta B^2\geq \left(\frac{1}{2i}(\mathbb{E}[AB]-\mathbb{E}[BA])\right)^2$$
$$\Rightarrow\Delta A^2\Delta B^2\geq \left(\left\langle \psi \right\rvert\frac{1}{2i}[\hat{A},\hat{B}]\left\lvert \psi \right\rangle\right)^2$$
