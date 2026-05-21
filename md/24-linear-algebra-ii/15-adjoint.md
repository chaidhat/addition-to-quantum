# Adjoint

An adjoint is basically a [<span class="underline">conjugate</span>](#conjugate) transpose but for an [<span class="underline">operator</span>](#operators)
(whereas a conjugate transpose can only be applied to a matrix)

Given operator $\hat{A}$, it’s adjoint is the operator $\hat{A}^+$
such that $\forall\left\lvert i \right\rangle,\left\lvert j \right\rangle$

$$\begin{gather*}
    \left\langle i \right\rvert\hat{A}^+\left\lvert j \right\rangle=(\left\langle j \right\rvert\hat{A}\left\lvert i \right\rangle)^*\\
    (\hat{A}^+)_{ij}=\hat{A}^*_{ji}
\end{gather*}$$

Where, for any operator $\hat{O}$, a matrix element
$\left\langle i \right\rvert\hat{O}\left\lvert j \right\rangle$ is just the $(i,j)$-th element of the matrix
representing $\hat{O}$ in basis $\{\left\lvert i \right\rangle\}$

Note that $\left\lvert i \right\rangle$ and $\left\lvert j \right\rangle$ are arbitrary [<span class="underline">basis states</span>](#basis-states)

where $A^*$ is the complex conjugation of $A$

properties:

$$\begin{gather*}
    (\hat{A}^+)^+=\hat{A}\\
    (\hat{A}+\hat{B})^+=\hat{A}^++\hat{B}^+\\
    (\hat{A}\hat{B})^+=\hat{B}^+\hat{A}^+
\end{gather*}$$

Example:

Consider operator

$$\begin{gather*}
    \hat{A}=\left\lvert 1 \right\rangle\left\langle 2 \right\rvert+2i\left\lvert 2 \right\rangle\left\langle 1 \right\rvert+3\left\lvert 2 \right\rangle\left\langle 2 \right\rvert\\
    \Rightarrow\text{adjoint of $\hat{A}$}=\left\lvert 2 \right\rangle\left\langle 1 \right\rvert-2i\left\lvert 1 \right\rangle\left\langle 2 \right\rvert+3\left\lvert 2 \right\rangle\left\langle 2 \right\rvert
\end{gather*}$$

So w.r.t. to basis $\{\left\lvert 1 \right\rangle,\left\lvert 2 \right\rangle\}$, $\hat{A}$ is

$$\begin{gather*}
    \hat{A}=\begin{pmatrix}
        0  & 1 \\
        2i & 3
    \end{pmatrix}
\end{gather*}$$

The conjugate transpose of $\hat{A}=\hat{A}^+$ which is

$$\begin{gather*}
    \hat{A}^+=\begin{pmatrix}
        0 & -2i \\
        1 & 3
    \end{pmatrix}
\end{gather*}$$

Which, once we pick an orthonormal basis, the matrix of $\hat{A}^+$
equals the conjugate transpose of the matrix of $\hat{A}$

$$\begin{gather*}
    \hat{A}^+=\text{adjoint of $\hat{A}$}
\end{gather*}$$
