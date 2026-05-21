# Gram-Schmidt Procedure

If you have
[<span class="underline">linearly
independent</span>](#linear-independence) vectors and want to convert them into an
[<span class="underline">orthonormal</span>](#orthonormality)
set, you can follow the Gram-Schmidt procedure.

Given $v_1,v_2,…,v_n$ as
[<span class="underline">LI</span>](#linear-independence)
[<span class="underline">vectors</span>](#vectors),
then $u_1, u_2, …, u_n$ can be built using

$$\begin{gather*}
    u_k=v_k-\sum_{i=1}^{k-1}\Pi_{u_i}(v_k)
\end{gather*}$$

This makes $u$ an
[<span class="underline">orthogonal</span>](#orthogonality)
[<span class="underline">vector</span>](#vectors)

Then you
[normalize](https://www.notion.so/Going-from-1-1-2-to-Understanding-Quantum-Mechanics-344d7c8acbf380088bbdfa6e9ac17c16?pvs=21)
$u$ to get a
[<span class="underline">orthonormal</span>](#orthonormality)
[<span class="underline">vector</span>](#vectors).
You do this by multiplying the
[<span class="underline">magnitude</span>](#magnitude)
of the
[<span class="underline">vector</span>](#vectors).
