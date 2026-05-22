# Isolated System

This builds on [[schruxf6dingers-equation-hamiltonian|Schrödinger’s equation]].
State changes from $`t_1\rightarrow t_2`$ according to some linear [[operators|operator]] $`U(t_2, t_1)`$.
``` math
\left\lvert \psi(t_2) \right\rangle=U(t_2, t_1)\left\lvert \psi(t_1) \right\rangle
```

Properties

1.  $`t_2=t_1`$ gives no change
    ``` math
    \left\lvert \psi(t_1) \right\rangle=U(t_1, t_1)\left\lvert \psi(t_1) \right\rangle
    ```
    ``` math
    U(t_1, t_1)=I
    ```

2.  composition
    ``` math
    \left\lvert \psi(t_3) \right\rangle=U(t_3, t_2)\left\lvert \psi(t_2) \right\rangle
    ```
    ``` math
    =U(t_3, t_2)U(t_2, t_1)\left\lvert \psi(t_1) \right\rangle
    ```
    ``` math
    =U(t_3, t_1)\left\lvert \psi(t_1) \right\rangle
    ```
    hence
    ``` math
    U(t_3, t_1)=U(t_3, t_2)U(t_2, t_1)
    ```

3.  inverse
    ``` math
    I=U(t_1,t_2)U(t_2,t_1)
    ```
    ``` math
    U(t_1,t_2)=U^{-1}(t_2,t_1)=U^\dag(t_2, t_1)
    ```

4.  diagonalizable
    ``` math
    U^\dag U = U U^\dag
    ```
    this means [[spectral-decomposition|spectral theorem]] applies.
    For every orthonormal basis $`\{\left\lvert k \right\rangle\}`$,
    ``` math
    U=\sum_k\lambda_k\left\lvert k \right\rangle\left\langle k \right\rvert
    ```
    ``` math
    I=\left\langle k \right\rvert U^\dag U\left\lvert k \right\rangle
    ```
    ``` math
    \lambda_k=e^{i\theta_k}
    ```
