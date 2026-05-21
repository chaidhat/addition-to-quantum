# Determinant

Det is a function that we can apply to matrices to get a scalar. It’s
defined for $n\times n$ only.

For a $2\times 2$ matrix it’s just

$$\begin{gather*}
    det\begin{bmatrix}a & b \\ c & d\end{bmatrix}=ad-bc
\end{gather*}$$

For an $n\times n$ matrix it can be done with cofactor expansion

$$\begin{gather*}
    det(A)=\sum_{j=1}^n(-1)^{i+j}a_{ij}M_{ij}
\end{gather*}$$

Note it’s recursive so it’s really expensive

also dont forget that

$$\begin{gather*}
    det(\hat{A}\hat{B})=det(\hat{A})det(\hat B)
\end{gather*}$$

An easier way to do it is through row reduction. Make a triangular
matrix and multiply the diags together

$$\begin{gather*}
    det\begin{pmatrix}a_{11} & *      & *      \\
                          & a_{22} & *      \\
                   0      & 0      & a_{33}
    \end{pmatrix}=a_{11}a_{22}a_{33}
\end{gather*}$$
