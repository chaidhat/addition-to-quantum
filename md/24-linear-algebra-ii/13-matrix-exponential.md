# Matrix Exponential

The matrix exponential of
[<span class="underline">square
matrix</span>](#square-matrix) $X$ is defined by a power series

$$\begin{gather*}
    e^X\triangleq \sum_{n=0}^\infty\frac{X^n}{n!}
\end{gather*}$$

Properties of this

- differential equations

  - the function $U(t)=e^{tX}$ is the only unique soln. to

$$\begin{gather*}
    \frac{dU}{dt}=XU(t)\quad U(0)=I
\end{gather*}$$

- diagonalizable matrices → if $X$ is diagonalizable (which is
  guaranteed for, e.g., real [<span class="underline">symmetric</span>](#symmetric-matrix) or [<span class="underline">Hermitian matrices</span>](#hermitian-matrix)) then
  we can write $X=PDP^{-1}$ with
  $D=diag(\lambda_1, … \lambda_n)$ then

$$\begin{gather*}
    e^X=Pdiag(e^{\lambda_1},...,e^{\lambda_n})P^{-1}
\end{gather*}$$

where $P$ is the basis matrix — a matrix whose columns are the
[<span class="underline">eigenvectors</span>](#eigenvectorseigenvalues) $X$ w.r.t $\hat{A}$.

Specifically, if $v_1,v_2,…,v_n$ are [<span class="underline">eigenvectors</span>](#eigenvectorseigenvalues) of $X$
corresponding to [<span class="underline">eigenvalues</span>](#eigenvectorseigenvalues) $\lambda_1,\lambda_2,…,\lambda_n$ then

$$\begin{gather*}
    P = \begin{bmatrix} | & | & & | \\ v_1 & v_2 & \cdots & v_n \\ | & | & & | \end{bmatrix}
\end{gather*}$$

- [<span class="underline">Hermitian</span>](#hermitian-matrix) and skew-Hermitian matrices → if $H=H^+$ then $e^{iH}$
  is [<span class="underline">unitary</span>](#unitary-operator) this means

$$\begin{gather*}
    (e^{iH})^+e^{iH}=I
\end{gather*}$$

Note that if $A$ is a matrix, then, via [<span class="underline">Taylor series</span>](#taylor-series), we have
$$e^{At} = \sum_{k=0}^{\infty}\frac{A^k t^k}{k!} = I + At + \frac{(At)^2}{2!} + \frac{(At)^3}{3!} + \cdots$$

$$\frac{d}{dt}e^{At} = \sum_{k=1}^{\infty}\frac{kA^k t^{k-1}}{k!} = A\sum_{k=1}^{\infty}\frac{A^{k-1}t^{k-1}}{(k-1)!} = Ae^{At} = e^{At}A$$
