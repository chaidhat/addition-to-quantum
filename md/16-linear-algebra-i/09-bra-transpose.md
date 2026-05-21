# Bra, Transpose

We just learned what ket $\left\lvert x \right\rangle$ means — a $N\times 1$ vector.
Let that ALSO be called a ket. If we flip it horizontally, we get a bra
$\left\langle x \right\rvert$.

If a ket is

$$\begin{gather*}
    \left\lvert x \right\rangle=\begin{pmatrix}
        1+3i \\
        2+5i \\
        7
    \end{pmatrix}\quad \left\lvert \psi \right\rangle=\begin{pmatrix}
        9 \\
        9 \\
        0 \\
        0 \\
        0
    \end{pmatrix}\quad\left\lvert \phi \right\rangle=\begin{pmatrix}
        0 \\
        1
    \end{pmatrix}
\end{gather*}$$

Then it’s counterpart is a bra

$$\begin{gather*}
    \left\langle x \right\rvert=\begin{pmatrix}
        1-3i &
        2-5i &
        7
    \end{pmatrix}\quad \left\langle \psi \right\rvert=\begin{pmatrix}
        9 &
        9 &
        0 &
        0 &
        0
    \end{pmatrix}\quad\left\langle \phi \right\rvert=\begin{pmatrix}
        0 &
        1
    \end{pmatrix}
\end{gather*}$$

You swap the columns for the rows (transpose!) and make every [<span class="underline">element</span>](#element)
the [<span class="underline">conjugate</span>](#conjugate) of itself. It becomes a $1\times N$ matrix instead.

Let this weird transformation be known as a conjugate transpose, denoted
as

$$\begin{gather*}
    \left\langle v \right\rvert=(\left\lvert v \right\rangle)^+
\end{gather*}$$
