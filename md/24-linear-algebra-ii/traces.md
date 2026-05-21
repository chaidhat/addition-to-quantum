# Trace

Tr(A) is only defined for a [[square-matrix]].

Given a square matrix $A$,

$$\begin{gather*}
    tr(A)=a_{11}+a_{22}+...+a_{nn}
\end{gather*}$$

Note that

$$\begin{gather*}
    tr(AB)=tr(BA)
\end{gather*}$$

Traces are just adding diagonals together

$$\begin{gather*}
    tr(\hat{T})=\sum_n\left\langle n \right\rvert\hat{T}\left\lvert n \right\rangle=\sum_nT_{nn}
\end{gather*}$$

Properties:

$$\begin{gather*}
    tr(\hat{A}\hat{B})=tr(\hat{B}\hat{A})\\
    tr(\hat{A}\hat{B}\hat{C})=tr(\hat{B}\hat{C}\hat{A})=tr(\hat{C}\hat{A}\hat{B})
\end{gather*}$$

Note that $tr(\hat{A}\hat{B}\hat{C})\neq tr(\hat{A}\hat{C}\hat{B})$ →
it must be cyclical permutation

$$\begin{gather*}
    tr(\alpha\hat{A}+\beta\hat{B})=\alpha tr(\hat{A})+\beta Tr(\hat{B})
\end{gather*}$$

Also note that if you get the traces of a $1\times 1$ matrix, it is just

$$tr(\begin{pmatrix}a\end{pmatrix})=a$$
