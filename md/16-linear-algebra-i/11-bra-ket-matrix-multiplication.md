# Bra-ket, matrix multiplication

Now let this be a bra-ket (get it?)

$$\begin{gather*}
    \left\langle \phi|\psi \right\rangle=\left\langle \phi \right\rvert\left\lvert \psi \right\rangle=\begin{bmatrix}c^* & d^*\end{bmatrix}\begin{bmatrix}a\\b\end{bmatrix}\quad
\end{gather*}$$

This means we’re multiplying these two matrices
$\begin{bmatrix}c^* & d^*\end{bmatrix},\begin{bmatrix}a\\b\end{bmatrix}$
together.

The way we multiply matrices is by performing this algorithm.

Let there be two matrices, $A,B$ with size $m\times n$ and
$n\times p$ respectively. We get a matrix $C=AB$ which is size
$m\times p$.

for an [<span class="underline">element</span>](#element) on row $i$, column $j$ in $C$ we let this be called
$C_{ij}$

$$\begin{gather*}
    C_{ij}=\sum_{k=1}^nA_{ik}B_{kj}
\end{gather*}$$

so

$$\begin{gather*}
    \left\langle \phi|\psi \right\rangle\\=\left\langle \phi \right\rvert\left\lvert \psi \right\rangle\\=\begin{pmatrix}c^* & d^*\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}\\=\begin{pmatrix}
        c^*a+d^*b\end{pmatrix}\\=c^*a+d^*b
\end{gather*}$$

It is a 1x1 matrix which can be simplified to a scalar value.

Note that

$$\begin{gather*}
    \left\langle x+|x+ \right\rangle=\left\langle x-|x- \right\rangle=1\\
    \left\langle x+|x- \right\rangle=\left\langle x-|x+ \right\rangle=0
\end{gather*}$$

Where $x+,x-$ are [<span class="underline">orthonormal</span>](#orthonormality) to each other. Another way we can say
this is $\{\left\lvert x+ \right\rangle,\left\lvert x- \right\rangle\}$ forms an [<span class="underline">orthonormal</span>](#orthonormality) [<span class="underline">basis</span>](#basis-states).

Let this be the notation of if/else

$$\begin{gather*}
    x=\begin{cases}1\quad\text{if true}\\0\quad\text{if false}\end{cases}
\end{gather*}$$

a set of [<span class="underline">vectors</span>](#vectors) $\{v_1,v_2,...,v_n\}$ form an [<span class="underline">orthonormal</span>](#orthonormality) [<span class="underline">basis</span>](#basis-states) if
and only if

$$\begin{gather*}
    \left\langle v_i|v_j \right\rangle=\delta_{ij}=\begin{cases}1\quad i=j\\0\quad i\neq j\end{cases}
\end{gather*}$$
