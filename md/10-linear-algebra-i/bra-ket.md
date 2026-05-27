# Bra-ket

Now let this be a [[transpose|bra]]-[[ket-state|ket]] (get it?)

$$
\begin{gather*}
    \left\langle \phi|\psi \right\rangle=\left\langle \phi \right\rvert\left\lvert \psi \right\rangle=\begin{bmatrix}c^* & d^*\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}\quad
\end{gather*}
$$

This means we’re multiplying these two [[matrix]]
$\begin{bmatrix}c^* & d^*\end{bmatrix},\begin{bmatrix}a\\b\end{bmatrix}$
together.

by doing [[matrix-multiplication|matrix multiplication]] we get

$$
\begin{gather*}
    \left\langle \phi|\psi \right\rangle\\=\left\langle \phi \right\rvert\left\lvert \psi \right\rangle\\=\begin{pmatrix}c^* & d^*\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}\\=\begin{pmatrix}
        c^*a+d^*b\end{pmatrix}\\=c^*a+d^*b
\end{gather*}
$$

It is a 1x1 matrix which can be simplified to a scalar value.

Note that

$$
\begin{gather*}
    \left\langle x+|x+ \right\rangle=\left\langle x-|x- \right\rangle=1\\
    \left\langle x+|x- \right\rangle=\left\langle x-|x+ \right\rangle=0
\end{gather*}
$$

Where $x+,x-$ are [[orthonormality|orthonormal]] to each other. Another way we can say
this is $\{\left\lvert x+ \right\rangle,\left\lvert x- \right\rangle\}$ forms an [[orthonormality|orthonormal]] [[basis-state|basis]].

a [[set]] of [[vectors]] $\{v_1,v_2,...,v_n\}$ form an [[orthonormality|orthonormal]] [[basis-state|basis]] if
and only if

where $\delta_{ij}$ is the [[kronecker-delta]]
$$
\begin{gather*}
    \left\langle v_i|v_j \right\rangle=\delta_{ij}=\begin{cases}1\quad i=j\\0\quad i\neq j\end{cases}
\end{gather*}
$$
