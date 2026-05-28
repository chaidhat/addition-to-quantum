# Invariant Subspace

A
[[subspace|subspace]]
$U\subseteq V$ is called $\hat{T}$-invariant if [[operator|operator]] $\hat{T}$
keeps everything in U inside U. If it is T-invariant, then this must
always be true:

$$
\begin{gather*}
    \hat{T}(U)=\{\hat{T}\left\lvert \psi \right\rangle|\left\lvert \psi \right\rangle\in U\}\subseteq U
\end{gather*}
$$

Simplest T invariant subspace is (with dimensions $d$)

$$
\begin{gather*}
    U=span\{\left\lvert u \right\rangle\}\\
    \hat{T}\left\lvert y \right\rangle=\lambda \left\lvert u \right\rangle
\end{gather*}
$$

When $\lambda$ is [[eigenvectoreigenvalue|Eigenvalue]] and $\left\lvert u \right\rangle$ is [[eigenvectoreigenvalue|eigenvector]] and
$\left\lvert u \right\rangle\neq 0$ and you can define these [[vector]] by checking

$$
\begin{gather*}
    (\hat{T}-\lambda I)\left\lvert u \right\rangle=0\\
    0=det(\hat{T}-\lambda I)\\
    =(\lambda_1-\lambda)(\lambda_2-\lambda)..(\lambda_d-\lambda)
\end{gather*}
$$

In general, this [[determinant|determinant]] has degree $\lambda_i$ are zeroes of
character polynomial $\lambda_i\in C$ can be repeated
