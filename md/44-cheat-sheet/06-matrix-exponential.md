# Matrix Exponential

For a square matrix $X$,
$$e^X \triangleq \sum_{n=0}^{\infty} \frac{X^n}{n!}$$
$$e^{At} = I + At + \frac{(At)^2}{2!} + \frac{(At)^3}{3!} + \cdots$$
$$\frac{d}{dt} e^{At} = A e^{At} = e^{At} A$$
$U(t)=e^{tX}$ is the unique solution to $\frac{dU}{dt}=XU(t)$, $U(0)=I$.

If $X = PDP^{-1}$ with $D=\mathrm{diag}(\lambda_1,\dots,\lambda_n)$,
$$e^X = P\,\mathrm{diag}(e^{\lambda_1},\dots,e^{\lambda_n})\,P^{-1}$$
If $H$ is Hermitian, then $e^{iH}$ is unitary:
$$(e^{iH})^\dagger e^{iH} = I$$
