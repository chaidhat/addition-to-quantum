# Spectral Decomposition

Let there be a [<span class="underline">Hermitian operator</span>](#hermitian-operators) $\hat{A}$ on a finite-dimensional [<span class="underline">Hilbert space</span>](#hilbert-spaces).
Spectral theorem says that a $\hat{A}$ is unitarily [<span class="underline">diagonalizable</span>](#diagonalization) and only if it is [<span class="underline">normal</span>](#normal-operator).
There exists real eigenvalues $\{a_n\}$, [<span class="underline">orthonormal</span>](#orthonormality) [<span class="underline">eigenvectors</span>](#eigenvectorseigenvalues) $\{\left\lvert k \right\rangle\}$ which form orthogonal [<span class="underline">projectors</span>](#projectors) $\{\hat{\Pi}_n\}$ such that

$$\hat{A}=\sum_{n=1}^N a_n\hat{\Pi}_n=\sum_{n=1}^N a_n\left\lvert k \right\rangle\left\langle k \right\rvert$$

where projectors satisfy

1.  $\hat{\Pi}_n\hat{\Pi}_m=0$ for $n\neq m$ which means they are [<span class="underline">orthogonal</span>](#orthogonality)

2.  $\sum_{n=1}^N \hat{\Pi}_n=\hat{I}$ which means they are a complete set of projectors

3.  this projector projects onto the $a_n$-[<span class="underline">eigenspace</span>](#eigenspaces) of $\hat{A}$

So $\{a_n\}$ is the spectrum of $\hat{A}$.

And that means you can think $\hat{A}$ as scaling each eigenspace by its own eigenvalue.
