# Kronecker Product

The Kronecker product is a way to compute the [[tensor-product]] of two matrices. It outputs a matrix as well.

Let there be a spin-1/2 system and two particles living $H_A$ and $H_B$ respectively which spans $\left\lvert 0 \right\rangle_A, \left\lvert 1 \right\rangle_A$ and $\left\lvert 0 \right\rangle_B, \left\lvert 1 \right\rangle_B$ respectively.
The tensor product basis for $H_A\otimes H_B$ is
$$\{\left\lvert 0 \right\rangle_A\otimes\left\lvert 0 \right\rangle_B, \left\lvert 0 \right\rangle_A\otimes\left\lvert 1 \right\rangle_B, \left\lvert 1 \right\rangle_A\otimes\left\lvert 0 \right\rangle_B, \left\lvert 1 \right\rangle_A\otimes\left\lvert 1 \right\rangle_B\}$$
This can be rewritten as
$$\left\lvert 00 \right\rangle\triangleq\left\lvert 0 \right\rangle_A\otimes\left\lvert 0 \right\rangle_B$$
$$\left\lvert 01 \right\rangle\triangleq\left\lvert 0 \right\rangle_A\otimes\left\lvert 1 \right\rangle_B$$
$$\left\lvert 10 \right\rangle\triangleq\left\lvert 1 \right\rangle_A\otimes\left\lvert 0 \right\rangle_B$$
$$\left\lvert 11 \right\rangle\triangleq\left\lvert 1 \right\rangle_A\otimes\left\lvert 1 \right\rangle_B$$

Let $\left\lvert 0 \right\rangle, \left\lvert 1 \right\rangle$ be a rank-1 tensor, i.e., a vector. Recall from [[ket-states]] and [[quantum-system|quantum systems]] that it is defined as
$$\left\lvert 0 \right\rangle=\begin{pmatrix}
        1 \\
        0
    \end{pmatrix}
    \quad
    \left\lvert 1 \right\rangle=\begin{pmatrix}
        0 \\
        1
    \end{pmatrix}$$
Note that
$$\left\lvert 0 \right\rangle_A=\begin{pmatrix} 1 \\ 0 \end{pmatrix}
    \quad
    \left\lvert 0 \right\rangle_B=\begin{pmatrix} 1 \\ 0 \end{pmatrix}$$
But when we compute the tensor product (for matrices this is known as the Kronecker product), we get
$$|0\rangle_A \otimes |0\rangle_B = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \otimes \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \cdot \begin{pmatrix} 1 \\ 0 \end{pmatrix} \\ 0 \cdot \begin{pmatrix} 1 \\ 0 \end{pmatrix} \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}$$
We can see the full basis of the new Hilbert space $H_A\otimes H_B$ as
$$|00\rangle = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix},\quad |01\rangle = \begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \end{pmatrix},\quad |10\rangle = \begin{pmatrix} 0 \\ 0 \\ 1 \\ 0 \end{pmatrix},\quad |11\rangle = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 1 \end{pmatrix}$$
