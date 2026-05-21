# Invariant Subspace

A
[<span class="underline">subspace</span>](#subspaces)
$U\subseteq V$ is called $\hat{T}$-invariant if [<span class="underline">operator</span>](#operators) $\hat{T}$
keeps everything in U inside U. If it is T-invariant, then this must
always be true:

$$\begin{gather*}
    \hat{T}(U)=\{\hat{T}\left\lvert \psi \right\rangle|\left\lvert \psi \right\rangle\in U\}\subseteq U
\end{gather*}$$

Simplest T invariant subspace is (with dimensions $d$)

$$\begin{gather*}
    U=span\{\left\lvert u \right\rangle\}\\
    \hat{T}\left\lvert y \right\rangle=\lambda \left\lvert u \right\rangle
\end{gather*}$$

When $\lambda$ is [<span class="underline">Eigenvalue</span>](#eigenvectorseigenvalues) and $\left\lvert u \right\rangle$ is [<span class="underline">eigenvector</span>](#eigenvectorseigenvalues) and
$\left\lvert u \right\rangle\neq 0$ and you can define these [<span class="underline">vectors</span>](#vectors) by checking

$$\begin{gather*}
    (\hat{T}-\lambda I)\left\lvert u \right\rangle=0\\
    0=det(\hat{T}-\lambda I)\\
    =(\lambda_1-\lambda)(\lambda_2-\lambda)..(\lambda_d-\lambda)
\end{gather*}$$

In general, this [<span class="underline">determinant</span>](#determinants) has degree $\lambda_i$ are zeroes of
character polynomial $\lambda_i\in C$ can be repeated
