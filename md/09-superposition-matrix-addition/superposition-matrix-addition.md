# Superposition, Matrix Addition

A photon can have a probability of $x\%$ of spinning up (+). This
means it would have $(100-x)\%$ of spinning down (-), since the
probabilities must add up. The photon actually is both spinning up and
spinning down until we observe it, where it collapses to either spinning
up or spinning down. Schröndinger’s cat.

We call this position of spinning both up and down simultaneously a
“superposition.”

Let’s just say the [<span class="underline">kets</span>](#ket-states) $\left\lvert + \right\rangle$ is the state of spinning up and $\left\lvert - \right\rangle$
is the state of spinning down.

Let a “state” just be a $N\times 1$ matrix like what we just said
above. So $\left\lvert x \right\rangle,\left\lvert \psi \right\rangle,\left\lvert \phi \right\rangle$ are all states.

Some states can be made of other states.

Example:

Let

$$\begin{gather*}
    \left\lvert x \right\rangle=\begin{pmatrix}
        1 \\
        0
    \end{pmatrix}\quad
    \left\lvert y \right\rangle=\begin{pmatrix}
        0 \\
        1
    \end{pmatrix}
\end{gather*}$$

If i multiply a matrix by a number (let this be called a “scalar”), we
apply the multiplication across all values.

$$\begin{gather*}
    \Rightarrow 3\left\lvert x \right\rangle=3\begin{pmatrix}1\\0\end{pmatrix}=\begin{pmatrix}3\times1\\3\times0\end{pmatrix}=\begin{pmatrix}3\\ 0\end{pmatrix}
\end{gather*}$$

If we add $\left\lvert x \right\rangle+3\left\lvert y \right\rangle$ we get

$$\begin{gather*}
    \Rightarrow\left\lvert x \right\rangle+3\left\lvert y \right\rangle=\begin{pmatrix}
        1 \\
        0
    \end{pmatrix}+3
    \begin{pmatrix}
        0 \\
        1
    \end{pmatrix}
    =\begin{pmatrix}
        1 \\
        3
    \end{pmatrix}
\end{gather*}$$

Notice how we’re adding the $n$-th elements of the states together for
each row?

We can represent these two states coexisting (i.e., a superposition)
using math now!

$$\begin{gather*}
    \left\lvert \psi \right\rangle=\alpha\left\lvert + \right\rangle+\beta\left\lvert - \right\rangle
\end{gather*}$$

where $\alpha,\beta$ are just numbers. See how they are a combination
of up and down states?

There is $|\alpha|^2$ probabilty that the photon, once observed, spins
upwards and $|\beta|^2$ probability it spins downwards once observed.

$|a|$ is just a way of saying make $a$ positive if it is negative.

Example:

$$\begin{gather*}
    |(-3)|=3\\
    |5|=5
\end{gather*}$$

Note that

$$\begin{gather*}
    |\alpha|^2+|\beta|^2=1
\end{gather*}$$

as you can’t have more than 100% or less than 0% probability of
something existing.

I’m going to write a ton of mathematical definitions which will build up
how to do the physics in the next section!
