# Spectral Decomposition

Let there be a [[hermitian-operator|Hermitian operator]] $\hat{A}$ on a finite-dimensional [[hilbert-space|Hilbert space]].
Spectral theorem says that an [[operator|operator]] $\hat{A}$ can be spectrally decomposed if it is unitarily [[diagonalization|diagonalizable]]  i.e., [[normal-operator|normal]].
There exists [[standard-number-systems|real]] eigenvalues $\{a_n\}$, [[orthonormality|orthonormal]] [[eigenvectoreigenvalue|eigenvectors]] $\{\left\lvert k \right\rangle\}$ which form orthogonal [[projector]] $\{\hat{\Pi}_n\}$ such that

$$
\hat{A}=\sum_{n=1}^N a_n\hat{\Pi}_n=\sum_{n=1}^N a_n\left\lvert k \right\rangle\left\langle k \right\rvert
$$

where projectors satisfy

1.  $\hat{\Pi}_n\hat{\Pi}_m=0$ for $n\neq m$ which means they are [[orthogonality|orthogonal]]

2.  $\sum_{n=1}^N \hat{\Pi}_n=\hat{I}$ which means they are a complete [[set]] of projectors

3.  this projector projects onto the $a_n$-[[eigenspace|eigenspace]] of $\hat{A}$

So $\{a_n\}$ is the spectrum of $\hat{A}$.

And that means you can think $\hat{A}$ as scaling each eigenspace by its own eigenvalue.
