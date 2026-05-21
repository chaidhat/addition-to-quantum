# Unitary Operator

An [<span class="underline">operator</span>](#operators) is unitary if and only if

$$\begin{gather*}
    \hat{U}^+\hat{U}=\hat{U}\hat{U}^+=I
\end{gather*}$$

- it preserves inner product

$$\begin{gather*}
    \left\lvert \alpha ' \right\rangle=\hat{U}\left\lvert \alpha \right\rangle\\
    \left\lvert \beta' \right\rangle=\hat{U}\left\lvert \beta \right\rangle\\
    \left\langle \alpha'|\beta' \right\rangle=\left\langle \alpha \right\rvert\hat{U}^+\hat{U}\left\lvert \beta \right\rangle\\
    =\left\langle \alpha \right\rvert I\left\lvert \beta \right\rangle\\
    =\left\langle \alpha|\beta \right\rangle
\end{gather*}$$

- U is basis chagne between orthonormal basis because you can write
  $\hat{U}$ as

  - as chatgpt puts it: unitary matrices/operators represent a rotation
    or change of coordinates in [<span class="underline">Hilbert space</span>](#hilbert-spaces), without changing lengths
    or angles.

$$\begin{gather*}
    \hat{U}=\hat{U}I
\end{gather*}$$

I can use [<span class="underline">completeness</span>](#completeness) relation so that if

$$\begin{gather*}
    \hat{U}\left\lvert \alpha_n \right\rangle=\left\lvert \beta_n \right\rangle
\end{gather*}$$

then we can change basis

$$\begin{gather*}
    \hat{U}\sum_n\left\lvert \alpha_n \right\rangle\left\langle \alpha_n \right\rvert\\
    =\sum_nU\left\lvert \alpha_n \right\rangle\left\langle \alpha_n \right\rvert\\
    =\sum_n\left\lvert \beta_n \right\rangle\left\langle \alpha_n \right\rvert
\end{gather*}$$

Both $\{\left\lvert \alpha_n \right\rangle\}$ and $\{\left\lvert \beta_n \right\rangle\}$ are orthonormal
basis
