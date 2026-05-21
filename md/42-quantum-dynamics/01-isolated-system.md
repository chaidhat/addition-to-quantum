# Isolated System

This builds on [<span class="underline">Schrödinger’s equation</span>](#schruxf6dingers-equation-hamiltonian).
State changes from $t_1\rightarrow t_2$ according to some linear [<span class="underline">operator</span>](#operators) $U(t_2, t_1)$.
$$\left\lvert \psi(t_2) \right\rangle=U(t_2, t_1)\left\lvert \psi(t_1) \right\rangle$$

Properties

1.  $t_2=t_1$ gives no change
    $$\left\lvert \psi(t_1) \right\rangle=U(t_1, t_1)\left\lvert \psi(t_1) \right\rangle$$
    $$U(t_1, t_1)=I$$

2.  composition
    $$\left\lvert \psi(t_3) \right\rangle=U(t_3, t_2)\left\lvert \psi(t_2) \right\rangle$$
    $$=U(t_3, t_2)U(t_2, t_1)\left\lvert \psi(t_1) \right\rangle$$
    $$=U(t_3, t_1)\left\lvert \psi(t_1) \right\rangle$$
    hence
    $$U(t_3, t_1)=U(t_3, t_2)U(t_2, t_1)$$

3.  inverse
    $$I=U(t_1,t_2)U(t_2,t_1)$$
    $$U(t_1,t_2)=U^{-1}(t_2,t_1)=U^\dag(t_2, t_1)$$

4.  diagonalizable
    $$U^\dag U = U U^\dag$$
    this means [<span class="underline">spectral theorem</span>](#spectral-decomposition) applies.
    For every orthonormal basis $\{\left\lvert k \right\rangle\}$,
    $$U=\sum_k\lambda_k\left\lvert k \right\rangle\left\langle k \right\rvert$$
    $$I=\left\langle k \right\rvert U^\dag U\left\lvert k \right\rangle$$
    $$\lambda_k=e^{i\theta_k}$$
